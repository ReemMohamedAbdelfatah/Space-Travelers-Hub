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
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th style={{ width: '10%' }}>#</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td><th>{mission.mission_name}</th></td>
            <td>{mission.description}</td>
            <td>
              {mission.reserved ? <Badge bg="#18a2b8" style={{ backgroundColor: '#18a2b8' }}>Active Member</Badge> : <Badge bg="secondary">NOT A MEMBER</Badge>}
            </td>
            <td style={{ alignItems: 'center' }}>
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
