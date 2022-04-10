import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailHouse from '../../../components/HouseDetail/DetailHouse';

const HousesDetail = () => {
  const [house, setHouse] = useState([]);
  let { name } = useParams("name");

  useEffect(() => {
    const getHouse = async () => {
      const res = await axios.get(
        `https://api.got.show/api/show/houses/${name}`
      );
      setHouse(res.data[0]);
    };

    getHouse();
  }, [name]);
  return (
    <>
      <DetailHouse house={house}/>
    </>
  )
}

export default HousesDetail