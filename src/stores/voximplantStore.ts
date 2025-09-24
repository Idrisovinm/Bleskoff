import { defineStore } from 'pinia'

interface CallState {
  isCalling: boolean
  error: string | null
  isInitialized: boolean
  lastCallId: string | null
  callStatus: 'idle' | 'calling' | 'connected' | 'failed' | 'completed'
}

interface VoximplantApiResponse {
  result: number
  call_session_history_id?: number
  error?: {
    code: number
    msg: string
  }
}

interface StartScenariosRequest {
  account_id: string
  api_key: string
  rule_id: number
  script_custom_data?: string
  user_id?: number
  user_name?: string
}

export const useVoximplantStore = defineStore('voximplant', {
  state: (): CallState => ({
    isCalling: false,
    error: null,
    isInitialized: true, // HTTP API не требует инициализации
    lastCallId: null,
    callStatus: 'idle'
  }),

  actions: {
    /**
     * Инициализация для HTTP API - проверяем наличие необходимых переменных
     */
    async initializeVoximplant(): Promise<boolean> {
      try {
        console.log('[VOXIMPLANT HTTP] === ПРОВЕРКА КОНФИГУРАЦИИ HTTP API ===')
        
        const accountId = import.meta.env.VITE_VOXI_ACCOUNT_ID
        const apiKey = import.meta.env.VITE_VOXI_API_KEY
        const ruleId = import.meta.env.VITE_VOXI_RULE_ID
        const applicationId = import.meta.env.VITE_VOXI_APPLICATION_ID
        
        console.log('[VOXIMPLANT HTTP] Переменные окружения:', {
          accountId: accountId ? `***${accountId.slice(-4)}` : 'НЕ ЗАДАН',
          hasApiKey: !!apiKey,
          ruleId: ruleId || 'НЕ ЗАДАН',
          applicationId: applicationId || 'НЕ ЗАДАН'
        })
        
        if (!accountId || !apiKey || !ruleId) {
          console.warn('[VOXIMPLANT HTTP] Отсутствуют необходимые переменные окружения для HTTP API')
          this.error = 'Отсутствуют переменные окружения для Voximplant HTTP API'
          return false
        }
        
        this.isInitialized = true
        console.log('[VOXIMPLANT HTTP] HTTP API готов к использованию')
        return true
      } catch (error) {
        console.error('[VOXIMPLANT HTTP] Ошибка инициализации:', error)
        this.error = 'Ошибка инициализации HTTP API'
        return false
      }
    },

    /**
     * Основной метод для совершения звонка через HTTP API
     * Отправляет запрос на StartScenarios API для запуска сценария
     */
    async makeCall(companyPhone: string, companyName: string, clientPhone: string): Promise<boolean> {
      try {
        this.isCalling = true
        this.error = null
        this.callStatus = 'calling'

        console.log('[VOXIMPLANT HTTP] === НАЧАЛО ЗВОНКА ЧЕРЕЗ HTTP API ===')
        console.log(`[VOXIMPLANT HTTP] Клиент: ${clientPhone}`)
        console.log(`[VOXIMPLANT HTTP] Компания: ${companyName} (${companyPhone})`)

        // Проверяем инициализацию
        if (!this.isInitialized) {
          const initialized = await this.initializeVoximplant()
          if (!initialized) {
            this.isCalling = false
            this.callStatus = 'failed'
            return false
          }
        }

        const accountId = import.meta.env.VITE_VOXI_ACCOUNT_ID
        const apiKey = import.meta.env.VITE_VOXI_API_KEY
        const ruleId = import.meta.env.VITE_VOXI_RULE_ID

        // Подготавливаем данные для передачи в сценарий
        const scriptCustomData = JSON.stringify({
          clientPhone: clientPhone.replace(/[^\d+]/g, ''), // Очищаем номер клиента
          companyPhone: companyPhone.replace(/[^\d+]/g, ''), // Очищаем номер компании
          companyName: companyName,
          timestamp: new Date().toISOString(),
          callType: 'conference_call'
        })

        console.log('[VOXIMPLANT HTTP] Данные для сценария:', scriptCustomData)

        // Формируем запрос к StartScenarios API
        const requestData: StartScenariosRequest = {
          account_id: accountId,
          api_key: apiKey,
          rule_id: parseInt(ruleId),
          script_custom_data: scriptCustomData
        }

        console.log('[VOXIMPLANT HTTP] Отправляем запрос к StartScenarios API...')

        // Отправляем HTTP запрос к Voximplant API
        const response = await fetch('https://api.voximplant.com/platform_api/StartScenarios/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(requestData as any).toString()
        })

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
        }

        const result: VoximplantApiResponse = await response.json()
        console.log('[VOXIMPLANT HTTP] Ответ от API:', result)

        // Проверяем результат
        if (result.result === 1) {
          // Успешный запуск сценария
          this.lastCallId = result.call_session_history_id?.toString() || null
          this.callStatus = 'connected'
          
          console.log('[VOXIMPLANT HTTP] ✅ Сценарий успешно запущен!')
          console.log(`[VOXIMPLANT HTTP] ID сессии: ${this.lastCallId}`)
          
          // Отправляем информацию о компании на наш сервер
          await this.sendCompanyDataToServer(companyName, companyPhone, clientPhone, this.lastCallId)
          
          // Симулируем завершение звонка через некоторое время
          setTimeout(() => {
            this.callStatus = 'completed'
            this.isCalling = false
            console.log('[VOXIMPLANT HTTP] Звонок завершен')
          }, 5000)
          
          return true
        } else {
          // Ошибка при запуске сценария
          const errorMsg = result.error?.msg || 'Неизвестная ошибка API'
          const errorCode = result.error?.code || 'unknown'
          
          this.error = `Ошибка API (${errorCode}): ${errorMsg}`
          this.callStatus = 'failed'
          
          console.error('[VOXIMPLANT HTTP] ❌ Ошибка запуска сценария:', this.error)
          return false
        }

      } catch (error) {
        let errorMessage = 'Неизвестная ошибка'
        
        if (error instanceof Error) {
          errorMessage = error.message
        } else if (typeof error === 'string') {
          errorMessage = error
        }
        
        this.error = `Ошибка HTTP запроса: ${errorMessage}`
        this.callStatus = 'failed'
        this.isCalling = false
        
        console.error('[VOXIMPLANT HTTP] ❌ Ошибка звонка:', error)
        return false
      }
    },

    /**
     * Отправляет информацию о компании на наш сервер
     */
    async sendCompanyDataToServer(companyName: string, companyPhone: string, clientPhone: string, callId: string | null): Promise<void> {
      try {
        const serverUrl = import.meta.env.VITE_API_BASE_URL
        
        if (!serverUrl) {
          console.warn('[VOXIMPLANT HTTP] URL сервера не настроен, пропускаем отправку данных')
          return
        }

        const payload = {
          companyName,
          companyPhone,
          clientPhone,
          callId,
          timestamp: new Date().toISOString(),
          status: 'call_initiated'
        }

        console.log('[VOXIMPLANT HTTP] Отправляем данные на сервер:', payload)

        const response = await fetch(`${serverUrl}/api/calls/company-data`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        })

        if (response.ok) {
          console.log('[VOXIMPLANT HTTP] ✅ Данные успешно отправлены на сервер')
        } else {
          console.warn('[VOXIMPLANT HTTP] ⚠️ Ошибка отправки данных на сервер:', response.status)
        }

      } catch (error) {
        console.error('[VOXIMPLANT HTTP] ❌ Ошибка отправки данных на сервер:', error)
        // Не прерываем основной процесс из-за ошибки отправки на сервер
      }
    },
  },
})
