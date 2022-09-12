import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% auto;
  min-width: 80%;
`;

export const Title = styled.h1`
  font-size: var(--font-size-7);
`;



export const Row = styled.tr`
  border-bottom: 1px solid grey;
`;

export const HeaderRow = styled.tr`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-align: center;
`;

export const HeaderColumn = styled.th`
  padding: 10px 0;
`;

export const Column = styled.td`
  text-align: center;
  padding: 20px 0;
  text-align: ${(props) => props.textAlign ?? "center"};
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Button = styled.button`
  width: 188px;
  height: 60px;
  justify-content: center;
  background: R141 G198 B63;
  color: white;
  font-size: var(--font-size-5);
  border: none;
  border-radius: 5px;

  @media only screen and (max-width: 960px) {
    font-size: var(--font-size-3);
    width: 94px;
    height: 50px;
  }
`;

