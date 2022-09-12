import React from "react";
import { Main, Container, Image, Content, ContentContainer, Title } from "./styles";

const SectionPage = () => {
  return (
    <Main>

      <Container>
        <Image />
        <ContentContainer>
          <Title>교육학과 배상훈 교수</Title>
          <Content>
          코로나19 전후, 학생의 사회정서적 경험과 학습패턴의 변화 연구를 통한 한국교육의 방향성 제시
          </Content>
        </ContentContainer>
      </Container>
    </Main>

  );
};

export default SectionPage;
