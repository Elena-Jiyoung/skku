import { Section, SectionPage, Members, Main, Hero } from "../../components";
import background from "../../assets/images/mainbackground.png";



const About_Members = () => {
  const heroHeight = Math.min(window.innerWidth / 2, 230);

  return (
    <>
      <Main>
      <Hero background={background} height={`${heroHeight}px`} />
        <Members />
      </Main>
      {/* <List /> */}
    </>
  );
};

export default About_Members;
