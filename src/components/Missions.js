import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMissions, joinMission } from './redux/missions/missions';
import '../styles/style.scss';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) {
      fetch('https://api.spacexdata.com/v3/missions')
        .then((res) => res.json())
        .then((data) => {
          dispatch(addMissions(data));
        });
    }
  }, [dispatch, missions.length]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  return (
    <div className="mission-container">
      <h2 className="mission-title">Missions</h2>
      <ul className="mission-list">
        {missions.map((mission) => (
          <li className="mission-item" key={mission.mission_id}>
            <h3 className="mission-name">{mission.mission_name}</h3>
            <p className="mission-description">{mission.description}</p>
            <div className="mission-badge-container">
              {mission.reserved ? (
                <div className="active-member-badge">Active Member</div>
              ) : (
                <div className="not-a-member-badge">NOT A MEMBER</div>
              )}
            </div>
            <div className="mission-action-container">
              {mission.reserved ? (
                <button
                  type="button"
                  className="leave-mission-button"
                >
                  Leave Mission
                </button>
              ) : (
                <button
                  type="button"
                  className="join-mission-button"
                  onClick={() => handleJoinMission(mission.mission_id)}
                >
                  Join Mission
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Missions;
