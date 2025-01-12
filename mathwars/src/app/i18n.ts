import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';


i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
     backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json', // 确保路径正确
       },
  }, (err, t) => {
    if (err) return console.error(err);
    // 初始化完成后调用 t 函数
    console.log(t('testMessage'));
  });

export default i18n;