import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import noTranslations from './locales/no.json';
import enTranslations from './locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    no: { translation: noTranslations },
    en: { translation: enTranslations }
  },
  lng: 'no', // Set Norwegian as default language
  fallbackLng: 'no',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;