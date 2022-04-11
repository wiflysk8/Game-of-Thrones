import React, { useContext } from "react";
import Nav from "../../components/Nav/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import GalleryCharacters from "../../components/GalleryCharacters/GalleryCharacters";
import Translator from "../../components/Translator/Translator";
import HomeButton from "../../components/HomeButton/HomeButton";
import SearchForm from "../../components/SearchForm/SearchForm";
import { LoadingContext } from "../../contexts/LoadingContext";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    const getCharacters = async () => {
      setIsLoading(true);
      const res = await axios.get("https://api.got.show/api/show/characters/");
      setCharacters(res.data);
      setFilteredCharacters(res.data);
      setIsLoading(false);
    };

    getCharacters();
  }, [setIsLoading]);

  const onFilter = (inputValue) => {
    let filteredCharacter = filteredCharacters.filter((character) => {
      if (character.name.toLowerCase().includes(inputValue.toLowerCase())) {
        return character;
      }
      return false;
    });
    setCharacters(filteredCharacter);
  };

  return (
    <>
      <SearchForm onFilter={onFilter} />
      <HomeButton />
      <Translator />
      <div className="c-characters">
        <GalleryCharacters characters={characters} />
      </div>
      <Nav />
    </>
  );
};

export default CharactersPage;
