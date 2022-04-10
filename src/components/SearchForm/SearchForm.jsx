import React from 'react'
import './SearchForm.scss'
import searchIcon from '../../assets/icons/search.svg'
import { useTranslation } from "react-i18next";

const SearchForm = ({onFilter}) => {
  const { t } = useTranslation(["translation"]);


  return (
    <div>
        <form className="c-search__form">
            <img className= "c-search__form__icon" src={searchIcon} alt="search icon"/>
            <input className="c-search__form__input" type="text" placeholder= {t("Search...")}  onInput={e => onFilter(e.target.value)}  />
        </form>
    </div>
  )
}

export default SearchForm