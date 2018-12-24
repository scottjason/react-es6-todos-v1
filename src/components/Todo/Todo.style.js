import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 65px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: black;
  border: 1px solid rgba(225, 225, 225, .6);
`;

export const Input = styled.input`
  background: black;
  outline: none;
  resize: none;
  width: 100%;
  border: none;
  padding: 0;
  box-sizing: border-box;
  font-size: .9rem;
  color: ${props =>  props.isEditMode ? '#FFCFA8' : 'white'};
`
export const Form = styled.form`
  position: absolute;
  margin: 0;
  width: 80%;
  outline: none;
  border: none;
  background-color: black;
  z-index: 2;
`

export const Delete = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  color: #15f4ee;
  cursor: pointer;
  font-size: .95rem;
  cursor: pointer;
`;


export const Update = styled.p`
  position: absolute;
  right: 10px;
  bottom: 0;
  color: #FFCFA8;
  cursor: pointer;
  font-size: .8rem;
`;