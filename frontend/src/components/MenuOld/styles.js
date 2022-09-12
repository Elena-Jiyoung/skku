import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  min-width: 95%;
  margin: 0 auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
  z-index: 1000;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;

  &:visited {
    color: black;
  }
`;

export const Title = styled.p`
  font-size: var(--font-size-6);
  user-select: none;
  color: black;
  font-weight: 600;

  @media only screen and (max-width: 1200px) {
    font-size: var(--font-size-5);
  }

  @media only screen and (max-width: 960px) {
    font-size: var(--font-size-3);
  }
`;

export const Logo = styled.img`
  @media screen and (max-width: 960px) {
    max-width: 32px;
  }
`;

export const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  user-select: none;
  font-size: var(--font-size-4);
  color: black;

  &:visited {
    color: black;
  }

  @media only screen and (max-width: 1200px) {
    font-size: var(--font-size-3);
  }
`;

export const MenuScreen = styled.div`
  width: 100%;
  transition: height 0.4s;
  height: ${(props) => (props.height ? "100%" : "0px")};
  position: absolute;
  top: 0px;
  padding-top: 70px;
  background-color: white;
`;

export const MenuScreenContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;

  > ${MenuItem} {
    margin: 5px 0;
    font-size: var(--font-size-5);
  }
`;
