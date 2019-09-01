import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '~/services/api';

import Meetup from '~/components/Meetup';
import { Container, Loading } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');
      setMeetups(response.data);
      setLoading(false);
    }

    loadMeetups();
  }, []);

  function renderMeetups() {
    if (meetups.length === 0) {
      return (
        <Container>
          <header>
            <strong>Meus meetups</strong>
            <Link to="/new">
              <button type="button">
                <FontAwesomeIcon icon="plus-circle" />
                Novo Meetup
              </button>
            </Link>
          </header>
          <span className="meetupIsEmpty">
            Você não possui meetups cadastrados
          </span>
        </Container>
      );
    }
    return (
      <Container>
        <header>
          <strong>Meus meetups</strong>
          <Link to="/new">
            <button type="button">
              <FontAwesomeIcon icon="plus-circle" />
              Novo Meetup
            </button>
          </Link>
        </header>
        <ul>
          {meetups.map(meetup => (
            <Meetup key={meetup.id} data={meetup} />
          ))}
        </ul>
      </Container>
    );
  }

  console.tron.log(meetups);

  return loading ? (
    <Loading>
      <FontAwesomeIcon icon="spinner" spin />
    </Loading>
  ) : (
    renderMeetups()
  );
}
