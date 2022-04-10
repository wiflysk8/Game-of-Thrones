import React from "react";
import HomeButton from "../HomeButton/HomeButton";
import Translator from "../Translator/Translator";
import goBack from "../../assets/icons/goBack.svg";
import { Link } from "react-router-dom";
import "././DetailHouse.scss";
import { useTranslation } from "react-i18next";

const DetailHouse = ({ house }) => {
  const { t } = useTranslation(["translation"]);

  return (
    <section className="c-detail">
      <HomeButton />
      <Translator />
      {house.name && (
        <div className="c-house-detail">
          <Link className="c-house-detail__link" to="/houses">
            <div className="c-house-detail__goBack">
              <img className="c-character-detail__goBack-arrow" src={goBack} alt="goback" />
              <p>{t("Go back")}</p>
            </div>
          </Link>
          <img
            className="c-house-detail__img"
            src={house.logoURL}
            alt={house.name}
          />
          <h2 className="c-house-detail__name">{house.name}</h2>
          <div className="c-house-detail__bottom">
            <div className="row">
              <div className="col-md-6 col-lg-2">
                <h3 className="c-house-detail__title">{t("Motto")}</h3>
                <p className="c-house-detail__text">{house.words}</p>
              </div>
              <div className="col-md-6 col-lg-2">
                <h3 className="c-house-detail__title">{t("Location")}</h3>
                <p className="c-house-detail__text">{house.seat}</p>
              </div>
              <div className="col-md-6 col-lg-2">
                <h3 className="c-house-detail__title">{t("Region")}</h3>
                <p className="c-house-detail__text">{house.region}</p>
              </div>
              <div className="col-md-6 col-lg-2">
                <h3 className="c-house-detail__title">{t("Allegiances")}</h3>
                {house.allegiance &&
                  house.allegiance.map((item, i) => (
                    <p className="c-house-detail__text" key={i}>
                      {item}
                    </p>
                  ))}
              </div>
              <div className="col-md-6 col-lg-2">
                <h3 className="c-house-detail__title">{t("Religions")}</h3>
                {house.religion &&
                  house.religion.map((item, i) => (
                    <p className="c-house-detail__text" key={i}>
                      {item}
                    </p>
                  ))}
              </div>
              <div className="col-md-6 col-lg-2">
                <h3 className="c-house-detail__title">{t("Fundation")}</h3>
                <p className="c-house-detail__text">
                  {new Date(
                    house.createdAt.substring(0, house.createdAt.indexOf("T"))
                  ).toLocaleDateString("en-UK")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailHouse;
