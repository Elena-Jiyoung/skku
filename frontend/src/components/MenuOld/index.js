import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Hamburger from "hamburger-react";

import logo from "../../assets/images/logo.svg";
import {
  Container,
  LogoLink,
  Logo,
  MenuDiv,
  MenuItem,
  Title,
  MenuScreen,
  MenuScreenContainer,
} from "./styles";

const Menu = () => {
  const menuItems = ["About", "K-NSSE", "UICA", "Research", "Board"];
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setOpen] = useState(false);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleClick = () => {
    setOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuScreen height={isOpen}>
        {isOpen && (
          <MenuScreenContainer>
            {menuItems.map((elem, i) => (
              <MenuItem
                key={i}
                onClick={handleItemClick}
                to={`/${elem.toLowerCase()}`}
              >
                {elem}
              </MenuItem>
            ))}
          </MenuScreenContainer>
        )}
      </MenuScreen>
      <Container>
        <LogoLink to="/" onClick={handleItemClick}>
          <Logo src={logo} />
          <Title>Global Education Group</Title>
        </LogoLink>
        {width >= 960 ? (
          <MenuDiv>
            {menuItems.map((elem, i) => (
              <MenuItem key={i} to={`/${elem.toLowerCase()}`}>
                {elem}
              </MenuItem>
            ))}
          </MenuDiv>
        ) : (
          <>
            <Hamburger
              size={16}
              color={"#000"}
              toggled={isOpen}
              toggle={handleClick}
              duration={0.4}
            />
          </>
        )}
      </Container>

      <Switch>
        <Route path="/"></Route>
      </Switch>
    </>
  );
};

export default Menu;
