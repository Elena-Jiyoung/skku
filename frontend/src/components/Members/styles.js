import styled from "styled-components";
import temp from "../../assets/images/members.png";

export const Container = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background: url(${temp}) center no-repeat;
`;

