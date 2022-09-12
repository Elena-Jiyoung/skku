import styled from "styled-components";

import BackgroundImage from "../../assets/images/mainbackground.png";

const Background = styled.div`
  background: url(${BackgroundImage}) center/cover no-repeat;
  height: ${(props) => props.height};
`;

export default Background;
