import React from "react";
import { Link } from "react-router-dom";

const CharacterPage = ({ character }) => {
  // Information
  const name = (character || {}).name;
  const description = (character || {}).description;

  const thumbnailPath = ((character || {}).thumbnail || {}).path;
  const thumbnailExtension = ((character || {}).thumbnail || {}).extension;
  const thumbnail = `${thumbnailPath}/portrait_xlarge.${thumbnailExtension}`;
  return (
    <div className="container">
      <div className="character">
        <div className="character__card">
          <img
            className="character__card-thumb"
            src={thumbnail}
            alt="Character Thumbnail"
          />
          <div className="character__card-info">
            <h1 className="character__card-info-title">{name}</h1>
            {description ? (
              <p className="character__card-info-description">{description}</p>
            ) : (
              <p className="character__card-info-description">
                No Description Found.
              </p>
            )}
            <Link to="/" className="btn btn-red-2">
              <i class="fa fa-arrow-circle-left" /> Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
