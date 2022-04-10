import { useTranslation } from "react-i18next";
import spainFlag from '../../assets/icons/spain.svg'
import ukFlag from '../../assets/icons/uk.svg'
import './Translator.scss'

const Translator = () => {
  const { i18n } = useTranslation(["translation"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="c-translator-nav">
        <img className='c-flag-icon' src={spainFlag} alt="spanis flag" onClick={()=> changeLanguage('es')}/>
        <img className='c-flag-icon' src={ukFlag} alt="UK flag"  onClick={()=> changeLanguage('en')}/>
    </div>
  )
}

export default Translator