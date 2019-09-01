import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 40px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 29px;

    strong {
      display: block;
      font-weight: 700;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 5px;
      color: #999999;

      &:hover {
        color: #fff;
      }
    }
  }

  button {
    background: #f94d6a;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    width: 71px;
    height: 42px;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }
  }
`;
