import React from 'react'
import Nav from '../../components/Nav/Nav'
import Translator from '../../components/Translator/Translator'
import { useTranslation } from "react-i18next";
import './HomePage.scss'


const HomePage = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <div className='c-home'>
    <Translator />
      <h1 className='c-home__title'>{t("Game Of Thrones")}</h1>
      <Nav />
    </div>
  )
}

export default HomePage