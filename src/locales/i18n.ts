import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import translation from "./en-us/common.json";

i18next.use(initReactI18next).init({
  lng: "en", // There is possibility to use LanguageDetector which detect browser's language
  debug: true,
  resources: {
    en: {
      translation,
    },
  },
});
