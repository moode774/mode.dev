import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

// Get default language from browser or fallback to en
const defaultLang = localStorage.getItem('appLang') || 'ar';

// Set dir attribute on body
document.body.dir = defaultLang === 'ar' ? 'rtl' : 'ltr';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    lng: defaultLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

