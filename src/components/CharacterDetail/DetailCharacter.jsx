import React, { useState, useEffect } from "react";
import "./DetailCharacter.scss";
import HomeButton from "../HomeButton/HomeButton";
import Translator from "../Translator/Translator";
import axios from "axios";
import goBack from "../../assets/icons/goBack.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DetailCharacter = ({ character }) => {
  const [houses, setHouses] = useState([]);
  const { t } = useTranslation(["translation"]);

  const getHouses = () => {
    axios("https://api.got.show/api/show/houses/" + character.house).then((res) => {
      if (res.data[0] !== undefined) {
        setHouses(res.data[0]);
      }
    });
  };

  useEffect(() => getHouses());

  return (
    <section className="c-detail">
      <HomeButton />
      <Translator />
      {character.name && (
        <div className="c-character-detail">
          <Link className="c-character-detail__link" to="/characters">
            <div className="c-character-detail__goBack">
              <img className="c-character-detail__goBack-arrow" src={goBack} alt="goback" />
              <p>{t("Go back")}</p>
            </div>
          </Link>
          <div className="c-character-detail__top">
            <img className="c-character-detail__img" src={character.image} alt={character.name} />
            <h2 className="c-character-detail__name">{character.name}</h2>
          </div>

          <div className="c-character-detail__bottom">
            <div className="row">
              <div className="col-md-6 col-lg-2">
                <h3 className="c-character-detail__title">{t("House")}</h3>
                <img className="c-character-detail__logo" src={houses.logoURL} alt="logo" />
              </div>
              <div className="col-md-6 col-lg-2">
                <h3 className="c-character-detail__title">{t("Allegiances")}</h3>
                {character.allegiances &&
                  character.allegiances.map((item, i) => (
                    <p className="c-character-detail__text" key={i}>
                      {item}
                    </p>
                  ))}
              </div>
              <div className="col-md-6 col-lg-2">
                <h3 className="c-character-detail__title">{t("Appearances")}</h3>
                <div className="c-character-detail__divScroll">
                  {character.appearances &&
                    character.appearances.map((item, i) => (
                      <p className="c-character-detail__text-scroll" key={i}>
                        {item}
                      </p>
                    ))}
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <h3 className="c-character-detail__title">{t("Father")}</h3>
                <p className="c-character-detail__text">{character.father}</p>
              </div>
              <div className="col-md-6 col-lg-2">
                <h3 className="c-character-detail__title">{t("Siblings")}</h3>
                {character.siblings &&
                  character.siblings.map((item, i) => (
                    <p className="c-character-detail__text" key={i}>
                      {item}
                    </p>
                  ))}
              </div>
              <div className="col-md-6 col-lg-2">
                <h3 className="c-character-detail__title">{t("Titles")}</h3>
                <div className="c-character-detail__divScroll">
                  {character.titles &&
                    character.titles.map((item, i) => (
                      <p className="c-character-detail__text-scroll" key={i}>
                        {item}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailCharacter;
