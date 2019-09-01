import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import DatePicker, { registerLocale } from 'react-datepicker';
import { parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Yup from 'yup';

import api from '~/services/api';

import BannerInput from './BannerInput';

import { Container } from './styles';

registerLocale('pt-BR', ptBR);

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  location: Yup.string().required('O local é obrigatório'),
  date: Yup.date(),
  banner_id: Yup.number(),
});

export default function NewEdit({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState({});
  const [startDate, setDate] = useState();

  useEffect(() => {
    async function loadMeetupDetails() {
      const response = await api.get(`meetups/${id}`);
      setMeetup({
        ...response.data,
        banner_id: response.data.banner.id,
        url: response.data.banner.url,
      });
      setDate(parseISO(response.data.date));
    }

    loadMeetupDetails();
  }, [id]); // eslint-disable-line

  function handleChange(date) {
    setDate(date);
  }

  function updateDescription(event) {
    setMeetup({ ...meetup, description: event.target.value });
  }

  async function handleSubmit(data) {
    try {
      const dataHandled = { ...data, date: startDate };
      await api.put(`meetups/${id}`, dataHandled);
      toast.success('Meetup atualizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao atualizar o meetup, verifique seus dados!');
    }
  }

  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" meetup={meetup} />
        <Input placeholder="Título do Meetup" type="text" name="title" />
        <Input
          multiline
          type="text"
          name="description"
          value={meetup.description}
          onChange={updateDescription}
          placeholder="Descrição Completa"
        />
        <DatePicker
          name="date"
          selected={startDate}
          onChange={handleChange}
          locale="pt-BR"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="dd 'de' MMMM', às' H:mm'h"
          placeholderText="Data do Meetup"
        />
        <Input placeholder="Localização" type="text" name="location" />
        <button type="submit">
          <FontAwesomeIcon icon="plus-circle" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}

NewEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
