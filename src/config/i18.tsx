import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector'; 

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'es',
    supportedLngs: ['es', 'en', 'ca'], 
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta para cargar los archivos de traducción
    },
  });

export default i18n;
