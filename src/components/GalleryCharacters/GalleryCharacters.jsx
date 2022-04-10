import React from "react";
import "./GalleryCharacters.scss";
import { Link, generatePath } from "react-router-dom";

const GalleryCharacters = ({ data }) => {
  return (
    <section className="c-characters">
      <div className="row">
        {data.map((character) => (
          <div className="col-12 col-md-6 col-lg-2" key={character.id}>
            <Link
              className="c-characters__link"
              to={generatePath("/characters/:name", { name: character.name })}
            >
              <figure key={character.id} className="c-characters__figure">
                <img
                  className="c-characters__figure__img"
                  src={character.image}
                  alt={character.name}
                />
                <div className="c-characters__figure__name">{character.name}</div>
              </figure>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryCharacters;
