import { Section, SectionPage, Members, Main, Hero } from "../../components";
import {BoardNew} from "../BoardNew"
import background from "../../assets/images/mainbackground.png";

const PostNewQuestion = () => {
  const heroHeight = Math.min(window.innerWidth / 2, 230);

  return (
    <>
      <Main>
      <Hero background={background} height={`${heroHeight}px`} />
        <BoardNew />
      </Main>
      {/* <List /> */}
    </>
  );
};

export default PostNewQuestion;
