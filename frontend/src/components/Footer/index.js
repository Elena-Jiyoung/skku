import React from "react";
import logo from "../../assets/images/skkufooterimg.png";
import {
  Container,
  Image,
  Content,
  ContentGroup,
  Subtext,
  Text,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Content>
        <ContentGroup>
          <Text>CONTACT</Text>
          <Subtext>(03063) 서울특별시 종로구 성균관로 25-2 성균관대학교 호암관.</Subtext>
          <Subtext>Tel. 02-740-1717</Subtext>
          <Subtext>E-mail. k-nsse@naver.com</Subtext>
        </ContentGroup>
        <ContentGroup>
          <Subtext>Copyright &copy; Global Education Group</Subtext>
          <Subtext>Design by Jiwoong Jeon and Won Seok Lee</Subtext>
        </ContentGroup>
      </Content>

      <Image src={logo} />
    </Container>
  );
};

export default Footer;
