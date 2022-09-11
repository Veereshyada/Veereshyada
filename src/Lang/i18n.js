import i18next from 'i18next'
import { initReactI18next } from "react-i18next";
import english from './english.json';
import hindi from './hindi.json';

i18next
.use(initReactI18next)
.init({
  compatibilityJSON: 'v3',
  lng:'en',
  fallbackLng: 'hi',
    resources:{
        en:english,
        hi:hindi,
    },
    interpolation: {
        escapeValue: false 
      },
    react:{
        useSuspense:false,
    },
});


export default i18next;