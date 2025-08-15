import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импортируем переводы
import en from './locales/en.json';
import ru from './locales/ru.json';
import tg from './locales/tg.json';

const resources = {
  en: {
    translation: en
  },
  ru: {
    translation: ru
  },
  tg: {
    translation: tg
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
