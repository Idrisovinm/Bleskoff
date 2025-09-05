import { defineStore } from 'pinia'
import * as Voximplant from 'voximplant-websdk'

interface CallState {
  isCalling: boolean
  currentCall: any | null
  error: string | null
}

export const useVoximplantStore = defineStore('voximplant', {
  state: (): CallState => ({
    isCalling: false,
    currentCall: null,
    error: null,
  }),

  actions: {
    async initializeVoximplant(): Promise<boolean> {
      try {
        const client = Voximplant.getInstance()
        await client.init({ micRequired: false })

        await client.login(import.meta.env.VITE_VOXI_ACCOUNT_ID, import.meta.env.VITE_VOXI_API_KEY)

        return true
      } catch (error) {
        this.error = `Ошибка инициализации: ${error}`
        return false
      }
    },

    async makeCall(companyPhone: string, companyName: string): Promise<boolean> {
      try {
        this.isCalling = true
        this.error = null

        const clientPhone = prompt('Введите ваш номер телефона:', '+7')
        if (!clientPhone) {
          this.isCalling = false
          return false
        }

        const client = Voximplant.getInstance()

        // Если не инициализирован - инициализируем
        if (!(client as any).isInitialized()) {
          const initialized = await this.initializeVoximplant()
          if (!initialized) return false
        }

        this.currentCall = await client.call({
          number: companyPhone,
          callerId: clientPhone,
          customData: JSON.stringify({
            source: 'cleaning-site',
            company: companyName,
            timestamp: new Date().toISOString(),
          }),
        } as any)

        // Слушаем события звонка
        this.setupCallListeners()

        return true
      } catch (error) {
        this.error = `Ошибка звонка: ${error}`
        this.isCalling = false
        return false
      }
    },

    setupCallListeners() {
      if (!this.currentCall) return

      this.currentCall.addEventListener(Voximplant.CallEvents.Connected, () => {
        console.log('Звонок соединен')
      })

      this.currentCall.addEventListener(Voximplant.CallEvents.Disconnected, () => {
        this.isCalling = false
        this.currentCall = null
      })

      this.currentCall.addEventListener(Voximplant.CallEvents.Failed, (error: any) => {
        this.error = `Ошибка соединения: ${error.message}`
        this.isCalling = false
        this.currentCall = null
      })
    },

    hangUp(): void {
      if (this.currentCall) {
        this.currentCall.hangup()
        this.currentCall = null
      }
      this.isCalling = false
    },
  },
  getters: {
    isOnCall: (state) => state.currentCall !== null,
    callStatus: (state) => {
      if (state.isCalling) return 'Соединяем...'
      if (state.error) return 'Ошибка'
      return 'Готов к звонку'
    },
  },
})
