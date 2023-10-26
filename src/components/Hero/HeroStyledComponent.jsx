import styled from "styled-components";

export const Paragraph = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-top: 18px;

  max-width: 960px;
  max-height: 48px;
  margin-left: auto;
  margin-right: auto;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CentralSlider = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  /* @media screen and (min-width: 335px) {
    margin-top: 15px;
  } */

  @media screen and (min-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (min-width: 1400px) {
    margin-top: 40px;
    padding-left: 60px;
    padding-right: 60px;
  }
`;
