import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 20px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 940px;
      border-radius: 4px;
      background: #000;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      width: 940px;
      height: 300px;
      color: #fff;

      svg {
        opacity: 0.3;
        font-size: 40px;
      }

      span {
        margin-top: 10px;
        font-size: 20px;
        font-weight: 700;
        opacity: 0.3;
      }
    }

    input {
      display: none;
    }
  }
`;
