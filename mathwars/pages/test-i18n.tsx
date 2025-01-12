import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import i18n from '../src/app/i18n';

const TestI18n: React.FC = () => {
    const { t, i18n: i18nInstance  } = useTranslation(); // 使用解构语法，获取 i18n 实例
    const [isInitialized, setIsInitialized] = useState(false);


     useEffect(() => {
        const handleInitialized = () => {
            setIsInitialized(true);
        };

       if (i18nInstance.isInitialized){
            handleInitialized();
       } else {
             i18nInstance.on('initialized', handleInitialized);
       }
        return () => {
             i18nInstance.off('initialized', handleInitialized);
        };
    }, [i18nInstance]);
      if (!isInitialized) {
         return <div>Loading...</div>;
      }

    return (
      <div>
          <p>{t('testMessage')}</p>
      </div>
    );
};


export default TestI18n;