import React from "react";
import { useState, useEffect, useContext } from "react";
import Nav from "../../components/Nav/Nav";
import axios from "axios";
import GalleryHouses from "../../components/GalleryHouses/GalleryHouses";
import SearchForm from "../../components/SearchForm/SearchForm";
import HomeButton from "../../components/HomeButton/HomeButton";
import Translator from "../../components/Translator/Translator";
import { LoadingContext } from "../../contexts/LoadingContext";

const HousesPage = () => {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);  
  const {setIsLoading} = useContext(LoadingContext)

  useEffect(() => {
    const getHouses = async () => {
      setIsLoading(true);
      const res = await axios.get("https://api.got.show/api/show/houses/");
      setHouses(res.data);  
      setFilteredHouses(res.data); 
      setIsLoading(false);    
    };

    getHouses();
  }, [setIsLoading]);

  const onFilter = (inputValue) => {   
    let filteredHouse = filteredHouses.filter((house) => {
     if (house.name.toLowerCase().includes(inputValue.toLowerCase())){
        return house;
      }
      return false;      
    });
    setHouses(filteredHouse);  
    } 


  return (
    <div>
    <SearchForm onFilter={onFilter}/>
    <HomeButton />
    <Translator />
      <GalleryHouses houses = {houses}/>
      <Nav />
    </div>
  );
};

export default HousesPage;
