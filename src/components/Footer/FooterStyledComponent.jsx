import styled from "styled-components";

export const SectionFooter = styled.footer`
  margin-top: 38px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  padding: 30px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-top: 1px solid var(--Border-Color-Light, #dfe2ed);
  /* @media screen and (min-width: 1862px) {
    height: 111px;
  } */
`;

export const FooterList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const ButtonFooter = styled.button`
  display: flex;
  align-items: center;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--Border-Color-Light, #dfe2ed);
  color: var(--Dark-Color, #000);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
