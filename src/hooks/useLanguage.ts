import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const getCurrentLanguage = () => {
    return i18n.language;
  };

  const getLanguageName = (code: string) => {
    const names: { [key: string]: string } = {
      en: 'English',
      ru: 'Русский',
      tg: 'Тоҷикӣ'
    };
    return names[code] || code;
  };

  return {
    t,
    changeLanguage,
    getCurrentLanguage,
    getLanguageName,
    currentLanguage: i18n.language
  };
};
