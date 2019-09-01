import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  padding: 0 30px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 10px;

  strong {
    color: #fff;
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: center;
  }

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin-right: 33px;
  }

  svg {
    color: #fff;
    font-size: 20px;
  }
`;
