import { Section, SectionPage, Members, Main, Hero } from "../../components";
import background from "../../assets/images/mainbackground.png";



const About = () => {
  const heroHeight = Math.min(window.innerWidth / 2, 230);

  return (
    <>
      <Main>
      <Hero background={background} height={`${heroHeight}px`} />
        <SectionPage/>
      </Main>
      {/* <List /> */}
    </>
  );
};

export default About;
