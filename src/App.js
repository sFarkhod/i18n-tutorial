import React from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <button onClick={() => changeLanguage("uz")}>UZ</button>
        <div>{t("text")}</div>
        <div>{t("hello")}</div>
      </div>
    </>
  );
};

export default App;
