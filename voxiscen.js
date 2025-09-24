/**
 * Voximplant Scenario для конференц-звонков
 * ГОТОВЫЙ К ИСПОЛЬЗОВАНИЮ СЦЕНАРИЙ
 *
 * ПЕРЕД ЗАГРУЗКОЙ В VOXIMPLANT ЗАМЕНИТЕ:
 * 1. "YOUR_CALLER_ID_HERE" на ваш реальный номер (например, "+1234567890")
 * 2. "https://your-server.com/api/voximplant/webhook" на ваш реальный URL
 */

// Получаем данные, переданные из HTTP API
const customData = VoxEngine.customData()
let callData = {}

try {
  // Парсим JSON данные, переданные через script_custom_data
  callData = JSON.parse(customData)
  Logger.write(`[SCENARIO] Получены данные: ${JSON.stringify(callData)}`)
} catch (e) {
  Logger.write(`[SCENARIO] Ошибка парсинга данных: ${e.message}`)
  VoxEngine.terminate()
}

// Проверяем наличие необходимых данных
if (!callData.clientPhone || !callData.companyPhone) {
  Logger.write('[SCENARIO] Отсутствуют номера телефонов')
  VoxEngine.terminate()
}

Logger.write(
  `[SCENARIO] Начинаем конференц-звонок между клиентом ${callData.clientPhone} и компанией ${callData.companyName} (${callData.companyPhone})`,
)

// Создаем конференцию
const conference = VoxEngine.createConference()
let clientCall = null
let companyCall = null
let clientConnected = false
let companyConnected = false

// Функция для отправки данных на сервер (ОПЦИОНАЛЬНО)
function sendDataToServer(status, details = {}) {
  try {
    const payload = {
      clientPhone: callData.clientPhone,
      companyPhone: callData.companyPhone,
      companyName: callData.companyName,
      status: status,
      timestamp: new Date().toISOString(),
      callSessionId: VoxEngine.callSessionId(),
      ...details,
    }

    // URL вашего локального сервера
    const serverUrl = 'http://localhost:3001/api/voximplant/webhook'

    Net.httpRequest(
      serverUrl,
      (result) => {
        Logger.write(`[SCENARIO] Данные отправлены на сервер: ${result.code}`)
      },
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        postData: JSON.stringify(payload),
      },
    )
  } catch (e) {
    Logger.write(`[SCENARIO] Ошибка отправки данных на сервер: ${e.message}`)
  }
}

// Функция для завершения сценария
function terminateScenario(reason) {
  Logger.write(`[SCENARIO] Завершение сценария: ${reason}`)
  sendDataToServer('call_ended', { reason: reason })

  if (clientCall) clientCall.hangup()
  if (companyCall) companyCall.hangup()

  VoxEngine.terminate()
}

// Обработчики событий конференции
conference.addEventListener(VoxEngine.ConferenceEvents.Started, () => {
  Logger.write('[SCENARIO] Конференция создана')
})

conference.addEventListener(VoxEngine.ConferenceEvents.Stopped, () => {
  Logger.write('[SCENARIO] Конференция завершена')
  terminateScenario('conference_ended')
})

// Шаг 1: Звоним клиенту
Logger.write(`[SCENARIO] Звоним клиенту: ${callData.clientPhone}`)

// Используем ваш номер как Caller ID
clientCall = VoxEngine.callPSTN(callData.clientPhone, '+79894773231')

clientCall.addEventListener(VoxEngine.CallEvents.Connected, () => {
  Logger.write('[SCENARIO] Клиент ответил')
  clientConnected = true

  // Воспроизводим сообщение клиенту
  clientCall.say(
    'Здравствуйте! Мы соединяем вас с компанией. Пожалуйста, подождите.',
    VoxEngine.Language.RU_RUSSIAN_FEMALE,
  )

  // Добавляем клиента в конференцию
  conference.add({
    call: clientCall,
    mode: VoxEngine.ConferenceParticipantMode.BOTH,
    direction: VoxEngine.ConferenceParticipantDirection.BOTH,
  })

  sendDataToServer('client_connected')

  // Теперь звоним компании
  setTimeout(() => {
    callCompany()
  }, 2000)
})

clientCall.addEventListener(VoxEngine.CallEvents.Disconnected, () => {
  Logger.write('[SCENARIO] Клиент отключился')
  sendDataToServer('client_disconnected')

  if (!companyConnected) {
    terminateScenario('client_disconnected_before_company')
  }
})

clientCall.addEventListener(VoxEngine.CallEvents.Failed, (e) => {
  Logger.write(`[SCENARIO] Не удалось дозвониться до клиента: ${e.code} - ${e.reason}`)
  sendDataToServer('client_call_failed', { error: e.reason })
  terminateScenario('client_call_failed')
})

// Функция для звонка компании
function callCompany() {
  Logger.write(`[SCENARIO] Звоним компании: ${callData.companyPhone}`)

  // Используем ваш номер как Caller ID
  companyCall = VoxEngine.callPSTN(callData.companyPhone, '+79894773231')

  companyCall.addEventListener(VoxEngine.CallEvents.Connected, () => {
    Logger.write('[SCENARIO] Компания ответила')
    companyConnected = true

    // Воспроизводим сообщение компании
    companyCall.say(
      `Здравствуйте! У вас заказ клининговых услуг от клиента ${callData.clientPhone}. Соединяем с клиентом.`,
      VoxEngine.Language.RU_RUSSIAN_FEMALE,
    )

    // Добавляем компанию в конференцию
    conference.add({
      call: companyCall,
      mode: VoxEngine.ConferenceParticipantMode.BOTH,
      direction: VoxEngine.ConferenceParticipantDirection.BOTH,
    })

    sendDataToServer('company_connected')

    // Уведомляем клиента о соединении
    setTimeout(() => {
      if (clientCall && clientConnected) {
        clientCall.say('Соединяем с компанией.', VoxEngine.Language.RU_RUSSIAN_FEMALE)
      }
    }, 1000)

    sendDataToServer('conference_started')
    Logger.write('[SCENARIO] Конференция между клиентом и компанией началась')
  })

  companyCall.addEventListener(VoxEngine.CallEvents.Disconnected, () => {
    Logger.write('[SCENARIO] Компания отключилась')
    sendDataToServer('company_disconnected')

    if (clientCall && clientConnected) {
      clientCall.say(
        'Компания недоступна. Попробуйте позвонить позже.',
        VoxEngine.Language.RU_RUSSIAN_FEMALE,
      )
      setTimeout(() => {
        terminateScenario('company_disconnected')
      }, 3000)
    } else {
      terminateScenario('company_disconnected')
    }
  })

  companyCall.addEventListener(VoxEngine.CallEvents.Failed, (e) => {
    Logger.write(`[SCENARIO] Не удалось дозвониться до компании: ${e.code} - ${e.reason}`)
    sendDataToServer('company_call_failed', { error: e.reason })

    if (clientCall && clientConnected) {
      clientCall.say(
        'К сожалению, компания сейчас недоступна. Попробуйте позвонить позже.',
        VoxEngine.Language.RU_RUSSIAN_FEMALE,
      )
      setTimeout(() => {
        terminateScenario('company_unavailable')
      }, 5000)
    } else {
      terminateScenario('company_call_failed')
    }
  })
}

// Таймаут для всего сценария (максимум 5 минут)
setTimeout(() => {
  terminateScenario('timeout')
}, 300000)

// Отправляем начальный статус
sendDataToServer('scenario_started')
