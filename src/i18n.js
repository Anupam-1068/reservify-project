import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locale/en/translations.json';
import etTranslations from './locale/et/translations.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translations: enTranslations },
    et: { translations: etTranslations }
  },
  lng: 'en',
  fallbackLng: 'en', // In case translation for selected language is not available
  interpolation: {
    escapeValue: false // React already protects from XSS
  }
});

export default i18n;
