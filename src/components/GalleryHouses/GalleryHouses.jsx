import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./GalleryHouses.scss";

const DetailHouse = ({ houses }) => {
  return (
    <section className="c-houses">
      <div className="c-houses__container">
        {houses.map(
          (house) =>
            house.logoURL && (
              <figure className="c-houses-figure" key={house.name}>
                <Link className="c-houses__link" to={generatePath("/houses/:name", { name: house.name })}>
                  <img className="c-houses-figure__img" src={house.logoURL} alt={house.name} />
                  <p className="c-houses-figure__name">{house.name}</p>
                </Link>
              </figure>
            )
        )}
      </div>
    </section>
  );
};

export default DetailHouse;
