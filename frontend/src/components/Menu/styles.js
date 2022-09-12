import styled from "styled-components/macro";
import { Link } from "react-router-dom";


export const MenuDrop = styled.div`
    visiblity:hidden;
    opacity:0;

    display: flex;
    transition: .2s ease-in-out;
    position: absolute;
    flex-direction: row;
    justify-content: flex-end;
    margin-top : 240px;

    width: 100%;
    height: 170px;

    background-color: rgba(0, 68, 131, 0.75);

`;

export const Container = styled.nav`
  width: 100%;
  margin: 0 auto;

  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
  z-index: 1000;
  &:hover  ${MenuDrop}{
        visiblity:visible;
        opacity:1;
    }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;
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



export const MenuBox= styled.div`
    display: flex;
    flex-direction: column;
    width: 12%;
`;
export const MenuContent = styled(Link)`
    color: white;
    text-decoration: none;
    z-index: 1;
    display: block;
    padding:12px;
    text-align: center;

    &:hover{
     color: grey;
    }

`;


export const MenuDiv = styled.div`

    width:60%;
    display:flex;


`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  user-select: none;
  font-size: var(--font-size-4);
  position: relative;
  display:inline-block;
  flex:1;
  text-align: center;
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
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;

  > ${MenuItem} {
    margin: 5px 0;
    font-size: var(--font-size-5);
  }
`;
