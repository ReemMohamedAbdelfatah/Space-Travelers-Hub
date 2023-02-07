import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { fetchRockets } from './redux/Rockets/Rockets';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rockets);
  const state = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, state]);

  return (
    <div className="allRocketsContainer">
      {rocketList.map((item) => item.map((item) => (
        <Rocket
          key={item.id}
          id={item.id}
          flickrImages={item.flickr_images}
          rocketName={item.rocket_name}
          description={item.description}
        />
      )))}
    </div>
  );
};
export default Rockets;
