import React from "react";
import "./GalleryCharacters.scss";
import { Link, generatePath } from "react-router-dom";

const GalleryCharacters = ({ characters }) => {
  return (
    <section className="c-characters">
      <div className="c-characters__container">
        {characters.map((character) => (
          <figure className="c-characters-figure">
            <Link className="c-characters__link" to={generatePath("/characters/:name", { name: character.name })}>
              <img className="c-characters-figure__img" src={character.image} alt={character.name} />
              <p className="c-characters-figure__name">{character.name}</p>
            </Link>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default GalleryCharacters;
