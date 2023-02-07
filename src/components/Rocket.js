import React from 'react';

const Rocket = (rocket) => {
  const {
    flickrImages, rocketName, description, id,
  } = rocket;

  return (
    <div className="rocketContainer" id={id}>
      <img className="rocketImage" alt="rocket..." src={flickrImages} />
      <div className="rocketDetails">
        <h2 className="rocketName">{rocketName}</h2>
        <p className="rocketDescription">{description}</p>
        <button type="button" className="reserveBtn">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
