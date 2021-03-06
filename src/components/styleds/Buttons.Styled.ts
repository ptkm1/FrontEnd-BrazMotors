import styled from 'styled-components';

export const ButtonBlack = styled.button`
  width: "90%";
  height: 50px;
  background: #000000;
  border: 1px solid #000000;
  box-sizing: border-box;
  margin-top: 15px;
  cursor: pointer;
  color: white;

  :hover{
    background: white;
    color: black;
    transition: 0.5s;
  }
`;

export const ButtonBlackBorder = styled.button`
  width: "80%";
  height: 50px;
  background: #000000;
  border: 1px solid #fff;
  box-sizing: border-box;
  margin-top: 15px;
  cursor: pointer;
  color: white;

  :hover{
    background: white;
    color: black;
    transition: 0.5s;
  }
`;
