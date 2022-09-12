import React, { useState } from "react";
import {
  Title,
  Subtitle,
  Submenu,
  MenuItem,
  ContainerTest,
  Subcontainer,
} from "./styles";

const Category = () => {
  const menuItems = ["연구소 소개", "조직도", "찾아오시는 길", "기타"];
  const [clicked, setClicked] = useState("");

  const handleClick = (item) => {
    setClicked(item);
  };
  return (
    <ContainerTest>
      <Subcontainer>
        <Subtitle>Global Leading Education Group</Subtitle>
        <Title>About</Title>
      </Subcontainer>

      <Submenu>
        {menuItems.map((elem, i) => (
          <MenuItem
            key={i}
            focused={clicked === elem}
            onClick={() => handleClick(elem)}
          >
            {elem}
          </MenuItem>
        ))}
      </Submenu>
    </ContainerTest>
  );
};

export default Category;
