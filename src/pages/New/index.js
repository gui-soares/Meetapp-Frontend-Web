import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

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

export default function NewEdit() {
  const [startDate, setDate] = useState();

  function handleChange(date) {
    setDate(date);
  }

  async function handleSubmit(data) {
    try {
      const dataHandled = { ...data, date: startDate };
      await api.post('meetups', dataHandled);
      toast.success('Meetup criado com sucesso!');

      history.push('/dashboard');
    } catch (error) {
      toast.error('Erro ao criar o meetup, verifique seus dados!');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input placeholder="Título do Meetup" type="text" name="title" />
        <Input
          multiline
          type="text"
          name="description"
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
