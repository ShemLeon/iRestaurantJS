import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ru from './locales/ru.json'
import en from './locales/en.json'
import he from './locales/he.json'
import ar from './locales/ar.json'

const resources = {
  ru: { translation: ru },
  en: { translation: en },
  he: { translation: he },
  ar: { translation: ar }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // язык по умолчанию
    fallbackLng: 'ru', // если перевод не найден, использовать русский
    interpolation: {
      escapeValue: false // React уже экранирует значения
    }
  })

export default i18n

