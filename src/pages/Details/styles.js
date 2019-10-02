import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    strong {
      color: #fff;
      font-size: 32px;
    }

    div {
      display: flex;
      flex-direction: row;
    }

    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }

  img {
    margin: 50px 0 25px 0;
    width: 940px;
    height: 300px;
    border-radius: 4px;
  }

  p {
    color: #fff;
    font-size: 18px;
    line-height: 32px;
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: 30px;

    span {
      color: #fff;
      opacity: 0.6;
      font-size: 16px;
      margin-left: 10px;
    }

    span:nth-child(2) {
      margin-right: 30px;
    }

    svg {
      color: #fff;
      opacity: 0.6;
      font-size: 20px;
    }
  }
`;

export const ButtonEdit = styled.button.attrs(props => ({
  disabled: props.past,
}))`
  background: ${props => (props.past ? 'rgba(77,186,249,0.3)' : '#4dbaf9')};
  height: 42px;
  width: 116px;
  font-size: 16px;
  font-weight: 700;
  color: ${props => (props.past ? 'rgba(255,255,255,0.3)' : '#fff')};
  border: none;
  border-radius: 4px;
  margin-right: 15px;

  &:hover {
    background: ${props => (props.past ? '' : darken(0.03, '#4dbaf9'))};
  }
`;

export const ButtonDelete = styled.button.attrs(props => ({
  disabled: !props.cancelable,
}))`
  background: ${props =>
    props.cancelable ? '#f94d6a' : 'rgba(249,77,106,0.3)'};
  height: 42px;
  width: 116px;
  font-size: 16px;
  font-weight: 700;
  color: ${props => (props.cancelable ? '#fff' : 'rgba(255,255,255,0.3)')};
  border: none;
  border-radius: 4px;

  &:hover {
    background: ${props => (props.cancelable ? darken(0.03, '#f94d6a') : '')};
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
