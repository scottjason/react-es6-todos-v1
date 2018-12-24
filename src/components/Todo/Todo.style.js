import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  width: 100%;
  height: auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, .7);
  border: 1px solid rgba(225, 225, 225, .6);
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: white;
  max-width: 85%;
`;

export const Delete = styled.div`
  color: #15f4ee;
  cursor: pointer;
`;