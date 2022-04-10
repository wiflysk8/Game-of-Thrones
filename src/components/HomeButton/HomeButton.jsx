import React from 'react'
import { Link} from "react-router-dom";
import homeIcon from '../../assets/icons/home.svg'
import './HomeButton.scss'

const HomeButton = () => {
  return (
    <div className='c-home__btn'>
       <Link to = {('/')}><img src= {homeIcon} alt="HomeButton" /></Link>
    </div>
  )
}

export default HomeButton