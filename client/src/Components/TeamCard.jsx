import React from "react";
import "./TeamCard.css";
const TeamCard = ({ name, role, image, bio }) => {
  return (
    <>
      <div className="team-card">
        <img src={image} alt={`${name}'s avatar`} className="team-avatar" />
        <div className="team-info">
          <h2>{name}</h2>
          <p>{role}</p>
          <p>{bio}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
