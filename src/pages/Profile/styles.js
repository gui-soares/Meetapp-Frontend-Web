import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

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

  hr {
    border: none;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 20px 0 20px;
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 0;
    height: 42px;
    width: 162px;
    background: #f94d6a;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }

    svg {
      margin-right: 10px;
      font-size: 25px;
    }
  }
`;
