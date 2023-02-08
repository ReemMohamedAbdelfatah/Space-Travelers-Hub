import { useSelector } from 'react-redux';

const Profile = () => {
  const rocketList = useSelector((state) => state.rockets);
  const reservedRocket = rocketList.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="profileDiv">
      <div className="missionListDiv">
        <h1 className="myMissionsHeader">My Missions</h1>
        <ul className="missionListContainer">
          {joinedMissions.map((list) => (
            <li className="missionList" key={list.id}>
              {list.mission_name}
            </li>
          ))}
        </ul>
      </div>
      <div className="rocketListDiv">
        <h1 className="myRocketsHeader">My Rockets</h1>
        <ul className="rocketListContainer">
          {reservedRocket.map((list) => (
            <li className="rocketList" key={list.id}>
              {list.rocketName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Profile;
