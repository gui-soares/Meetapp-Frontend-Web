import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './styles';

export default function Meetup({ data }) {
  const dateFormated = useMemo(() => {
    return format(parseISO(data.date), "dd 'de' MMMM', às' H:mm'h", {
      locale: ptBR,
    });
  }, [data.date]);

  return (
    <Container>
      <strong>{data.title}</strong>
      <div>
        <span>{dateFormated}</span>
        <Link to={`meetup/details/${data.id}`}>
          <FontAwesomeIcon icon="chevron-right" />
        </Link>
      </div>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};
