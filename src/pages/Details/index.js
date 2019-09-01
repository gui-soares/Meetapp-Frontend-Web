/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Loading, ButtonEdit, ButtonDelete } from './styles';

export default function Details({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetupDetails() {
      const response = await api.get(`meetups/${id}`);
      setMeetup({
        ...response.data,
        dateFormated: format(
          parseISO(response.data.date),
          "dd 'de' MMMM', às' H:mm'h",
          {
            locale: ptBR,
          }
        ),
        url: response.data.banner.url,
      });
      setLoading(false);
    }

    loadMeetupDetails();
  }, [id]);

  async function handleDeleteMeetup() {
    try {
      await api.delete(`meetups/${id}`);
      toast.success('O Meetup foi deletado');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Não foi possível deletar o meetup');
    }
  }

  console.tron.log(meetup);

  return loading ? (
    <Loading>
      <FontAwesomeIcon icon="spinner" spin />
    </Loading>
  ) : (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <Link to={meetup.past ? '#' : `/edit/${id}`}>
            <ButtonEdit type="button" past={meetup.past}>
              <FontAwesomeIcon icon="pen" />
              Editar
            </ButtonEdit>
          </Link>
          <ButtonDelete
            type="button"
            onClick={handleDeleteMeetup}
            cancelable={meetup.cancelable}
          >
            <FontAwesomeIcon icon="trash-alt" />
            Cancelar
          </ButtonDelete>
        </div>
      </header>

      <img src={meetup.url} alt="banner" />

      <p>{meetup.description}</p>

      <footer>
        <FontAwesomeIcon icon="calendar-alt" />
        <span>{meetup.dateFormated}</span>
        <FontAwesomeIcon icon="map-marker-alt" />
        <span>{meetup.location}</span>
      </footer>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
