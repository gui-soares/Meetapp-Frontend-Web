import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(#22202c, #402845);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  input {
    background: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 4px;
    height: 50px;
    padding: 0 15px;
    color: #fff;
    font-size: 18px;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    margin: 5px 0 0;
    height: 50px;
    background: #f94d6a;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }
  }

  a {
    color: #fff;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 700;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
`;
