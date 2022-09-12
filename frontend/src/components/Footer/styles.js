import styled from "styled-components/macro";

export const Container = styled.footer`
  color: #888888;
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  padding: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContentGroup = styled.div``;

export const Text = styled.p`
  font-size: var(--font-size-2);
  font-weight: 700;
`;

export const Subtext = styled.p`
  font-size: var(--font-size-2);
`;

export const Image = styled.img`
  max-width: 150px;
`;
