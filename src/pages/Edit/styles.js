import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      width: 940px;
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

    textarea {
      background: rgba(0, 0, 0, 0.2);
      border: none;
      border-radius: 4px;
      height: 200px;
      padding: 15px;
      color: #fff;
      font-size: 18px;
      margin: 0 0 10px;
      resize: none;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span:nth-child(n + 3) {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button[type='submit'] {
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0 20px 0;
      height: 42px;
      width: 180px;
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
        font-size: 25px;
        margin-right: 10px;
      }
    }
  }
`;
