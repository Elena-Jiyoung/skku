import styled from "styled-components";

export const Card = styled.div`
  width: 500px;
  height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Photo = styled.img``;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  color: #1e2749;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;

export const FieldDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

export const FieldKey = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const FieldValue = styled.p`
  margin: 0;
`;

export const EmailDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;
`;

export const Title = styled.p`
  margin: 0;
`;
