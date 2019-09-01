import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    strong {
      color: #fff;
      font-size: 32px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 42px;
      width: 172px;
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
    }

    svg {
      margin-right: 10px;
      font-size: 25px;
    }
  }

  .meetupIsEmpty {
    color: #fff;
    font-size: 20px;
    margin-top: 40px;
  }

  ul {
    max-width: 940px;
  }
`;

export const Loading = styled.div`
  max-width: 940px;
  margin: 100px auto 0 auto;
  display: flex;
  justify-content: center;

  svg {
    color: #fff;
    font-size: 40px;
    text-align: center;
  }
`;
