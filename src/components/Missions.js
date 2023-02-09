import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {
  addMissions,
  joinMission,
  leaveMission,
} from './redux/missions/missions';
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

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>
              {mission.reserved ? <Badge bg="#18a2b8" style={{ backgroundColor: '#18a2b8' }}>Active Member</Badge> : <Badge bg="secondary">NOT A Member</Badge>}
            </td>
            <td>
              {mission.reserved ? (
                <Button
                  variant="outline-danger"
                  onClick={() => handleLeaveMission(mission.mission_id)}
                >
                  Leave Mission
                </Button>
              ) : (
                <Button
                  variant="outline-secondary"
                  type="button"
                  className="join-mission-button"
                  onClick={() => handleJoinMission(mission.mission_id)}
                >
                  Join Mission
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default Missions;
