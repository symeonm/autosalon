import styled from "styled-components";

export const Paragraph = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */

  max-width: 960px;
  max-height: 48px;
  margin-left: auto;
  margin-right: auto;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
