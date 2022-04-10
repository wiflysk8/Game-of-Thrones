import React from "react";
import "./ChronoPage.scss";
import arrow from "../../assets/images/arrow.svg";
import Translator from "../../components/Translator/Translator";
import HomeButton from "../../components/HomeButton/HomeButton";
import Nav from "../../components/Nav/Nav";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { LoadingContext } from "../../contexts/LoadingContext";

const ChronoPage = () => {
  const [characters, setCharacters] = useState([]);
  const [highToLow, setHighToLow] = useState(true);
  const { setIsLoading } = useContext(LoadingContext);
  const orderedCharacters = [];

  useEffect(() => {
    const getCharacters = async () => {
      setIsLoading(true);
      const res = await axios.get("https://api.got.show/api/show/characters/");
      setCharacters(res.data);
      setIsLoading(false);    
    };

    getCharacters();
  }, [setIsLoading]);  
 
  for (let character of characters){
    if (character.age){
      if(character.age.age){
        orderedCharacters.push(character);
      }
    }
  }
  
  

  const showOrderCharacters = () => {
    if (highToLow) {
      orderedCharacters.sort((a, b) => a.age.age - b.age.age);
    } else {
      orderedCharacters.sort((a, b) => b.age.age - a.age.age);
    }

    for (let i = 0; i < orderedCharacters.length; i++) {
      if (i % 2 === 0) {
        characterPair.push(orderedCharacters[i]);
      } else {
        characterOdd.push(orderedCharacters[i]);
      }
    }
  }
 

  const characterPair = [];
   const characterOdd = [];

 

  const changeOrder = () => {
    if (highToLow) {
      setHighToLow(false);
      showOrderCharacters();
    } else {
      setHighToLow(true);
      showOrderCharacters();
    }
  };
  showOrderCharacters();
  return (
    <>
      <HomeButton />
      <Translator />

      <section className="c-chrono">
        <div className="c-chrono-page">
          <div className="c-chrono__left">
               <div className="c-chrono__btn" onClick={changeOrder}>{characterPair[0] && characterPair[0].age.age}</div> 
            <img src={arrow} alt="arrow" className={highToLow ? "c-chrono__arrow" : "c-chrono__arrow-inverted"}   />
            {characterPair.map((character) => (
              <div className="box-left" key={character.name}>
                {character.age && (
                  <p className="box-left__age">{character.age.age}</p>
                )}
                <p>{character.name}</p>
                <img
                  className="box-left__img"
                  src={character.image}
                  alt="img"
                />
              </div>
            ))}
          </div>
          <div className="c-chrono__right">
            {characterOdd.map((character) => (
              <div className="box-right" key={character.name}>
                {character.age && (
                  <p className="box-right__age">{character.age.age}</p>
                )}
                <p>{character.name}</p>
                <img
                  className="box-right__img"
                  src={character.image}
                  alt="img"
                />
              </div>
            ))}
          </div>
        </div>
        <Nav />
      </section>
    </>
  );
};

export default ChronoPage;
