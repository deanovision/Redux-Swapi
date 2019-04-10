import React from "react";

const Character = ({ character }) => {
  return (
    <div>
      <h3>{character.name}</h3>
      <p>Birth Year: {character.birth_year}</p>
      <p>Hair Color: {character.hair_color}</p>
    </div>
  );
};

export default Character;
