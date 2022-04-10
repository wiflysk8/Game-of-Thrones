import React from "react";
import { Link, generatePath } from "react-router-dom";
import "./GalleryHouses.scss";

const DetailHouse = ({ houses }) => {
  return (
    <section className="c-houses">
    <div className="row">
      {houses.map(
        (house) =>
          house.logoURL && (
            <div className="col-12 col-md-6 col-lg-2" key={house._id}>
              <Link
                className="c-houses__link"
                to={generatePath("/houses/:name", { name: house.name })}
              >
                <figure className="c-houses-figure">
                  <img
                    className="c-houses-figure__img"
                    src={house.logoURL}
                    alt={house.name}
                  />
                  <p className="c-houses-figure__name">{house.name}</p>
                </figure>
              </Link>
            </div>
          )
      )}
    </div>
    </section>
  );
};

export default DetailHouse;
