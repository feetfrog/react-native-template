import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import it from '@/Assets/translations/it.json'

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'it',
  debug: true,
  resources: { it },
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
