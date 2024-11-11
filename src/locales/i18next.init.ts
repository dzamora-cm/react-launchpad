import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const nameSpacesDef: string = import.meta.env.VITE_APP_NAME_SPACES_DEF_I18;
const nameSpacesUrl: string = import.meta.env.VITE_APP_NAME_SPACES_I18_URL;
const nameSpaces: string[] = import.meta.env.VITE_APP_NAME_SPACES_I18.split(
    ','
);

i18n.use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        ns: nameSpaces,
        defaultNS: nameSpacesDef,
        backend: {
            loadPath: `${nameSpacesUrl}/{{ns}}/{{lng}}.json`
        },
        react: {
            useSuspense: false
        }
    });

export default i18n;
