import i18next from "i18next";
import translation from "./en-us/common.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "en", // There is possibility to use LanguageDetector which detect browser's language
  debug: true,
  resources: {
    en: {
      translation,
    },
  },
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});
