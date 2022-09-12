import styled from "styled-components/macro";

export const Button = styled.button`
  display: inline-block;
  height: 100px;
  flex-direction: row;
  background-color: white;
  border: 1px solid black;
  margin: 1em;
  border-radius: 10px;
  width: 75%;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.a`
  font-size: 25px;
  ${(props) => props.focused && `color: red`}
`;
