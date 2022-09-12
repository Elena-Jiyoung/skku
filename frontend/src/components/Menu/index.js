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
  MenuDrop,
  MenuContent,
  MenuBox,
  Title,
  MenuScreen,
  MenuScreenContainer,
} from "./styles";

const Menu = () => {
  const menuItems = ["About", "UICA", "K-NESSE","Research", "Board"];
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
        <>
          <MenuDiv>
            {menuItems.map((elem, i) => (
              <MenuItem key={i} to={`/${elem.toLowerCase()}`}>
                {elem}
              </MenuItem>
            ))}
          </MenuDiv>
          <MenuDrop>
                <MenuBox>
                        <MenuContent to ="/about/organization">Organization</MenuContent>
                        <MenuContent to ="/about/leader">Leader</MenuContent>
                        <MenuContent to ="/about/members">Members</MenuContent>
                    </MenuBox>
                    <MenuBox>
                        <MenuContent to ="/k-nsse/introduction">Introduction</MenuContent>
                        <MenuContent to ="/k-nsse/participate">Participate</MenuContent>
                    </MenuBox>
                    <MenuBox>
                        <MenuContent to ="/uica/introduction">Introduction</MenuContent>
                        <MenuContent to ="/uica/participate">Participate</MenuContent>
                    </MenuBox>
                    <MenuBox>
                    <MenuContent to ="/research/book">Book</MenuContent>
                    <MenuContent to ="/research/conference">Conference</MenuContent>
                    <MenuContent to ="/research/journal">Journal</MenuContent>
                    <MenuContent to ="/research/projects">Projects</MenuContent>

                </MenuBox>
                <MenuBox>
                    <MenuContent to ="/board/announcement">Announcement</MenuContent>
                    <MenuContent to ="/board/report">Report</MenuContent>
                    <MenuContent to ="/board/reference">Reference</MenuContent>

                </MenuBox>
                </MenuDrop>
                </>

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
