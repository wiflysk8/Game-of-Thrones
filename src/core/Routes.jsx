import React from 'react'
import { Routes, Route } from "react-router-dom";
import ChronoPage from '../pages/ChronoPage/ChronoPage';
import  CharactersPage  from "../pages/CharactersPage/CharactersPage";
import  HousesPage  from "../pages/HousesPage/HousesPage";
import  HomePage  from "../pages/HomePage/HomePage";
import  CharactersDetail  from "../pages/CharactersPage/CharactersDetail/CharactersDetail";
import  HousesDetail  from "../pages/HousesPage/HousesDetail/HousesDetail";

const RoutesFile = () => {
  return (
   
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:name" element={<CharactersDetail />} />
        <Route path="/houses" element={<HousesPage />} />
        <Route path="/houses/:name" element={<HousesDetail />} />        
        <Route path="/chrono" element={<ChronoPage />} />
      </Routes>
     
    </div>
    
  )
}

export default RoutesFile