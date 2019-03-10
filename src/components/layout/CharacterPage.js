import React from "react";

const CharacterPage = ({ character }) => {
  // console.log(character);

  // Information
  const name = (character || {}).name;
  const description = (character || {}).description;

  const thumbnailPath = ((character || {}).thumbnail || {}).path;
  const thumbnailExtension = ((character || {}).thumbnail || {}).extension;
  const thumbnail = `${thumbnailPath}/portrait_xlarge.${thumbnailExtension}`;
  console.log(thumbnail);
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
            <p className="character__card-info-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
