import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCharacter from "../../../components/CharacterDetail/DetailCharacter";

const CharactersDetail = () => {
  const [character, setCharacter] = useState([]);
  let { name } = useParams("name");

  useEffect(() => {
    const getCharater = async () => {
      const res = await axios.get(
        `https://api.got.show/api/show/characters/${name}`
      );
      setCharacter(res.data);
      
    };

    getCharater();
  }, [name]);
  return (
    <>
      <DetailCharacter character = {character}/>
    </>
  )
}

export default CharactersDetail