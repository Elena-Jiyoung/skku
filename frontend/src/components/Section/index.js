import styled from "styled-components";

const Section = styled.div`
  display: flex;
  align-items: center;
  ${(props) => {
    if (props.background) {
      return `
        background: url(${props.background}) 50% 0 no-repeat scroll;
        background-size: cover;
      `;
    }
  }}
  height: ${(props) => props.height}
`;

export default Section;
