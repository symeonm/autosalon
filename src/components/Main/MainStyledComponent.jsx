import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin-top: 60.5px;
  margin-left: auto;
  margin-right: auto;
`;

export const AutoInfo = styled.div`
  /* display: flex; */
  justify-content: space-between;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 335px) {
    padding-left: 20px;
    padding-right: 20px;
    display: block;
  }

  @media screen and (min-width: 1400px) {
    display: flex;
    width: 1070px;
  }
`;

export const NameAuto = styled.h2`
  text-align: left;
  color: #000;
  font-family: Montserrat;
  font-size: 46px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const ListSvg = styled.ul`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 769px) {
    gap: 60px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const ListSvgItem = styled.li``;

export const SubTitle = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1px;
  gap: 30px;
`;

export const CopyNumber = styled.div`
  display: flex;
  gap: 10px;
`;

export const NumberAuto = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: 140%; /* 28px */
`;

export const BrendAuto = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const Description = styled.p`
  color: var(--Gray-Color, #62687f);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Price = styled.h3`
  color: #000;
  font-family: Montserrat;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Paragraph = styled.p`
  text-align: end;
  margin-top: 10px;
  color: var(--Gray-Color, #62687f);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */

  @media screen and (max-width: 1399px) {
    text-align: start;
  }
`;

export const PriceInfo = styled.div`
  display: flex;

  @media screen and (min-width: 335px) {
    justify-content: space-between;

    margin-top: 40px;
  }

  @media screen and (min-width: 1400px) {
    height: 100%;
    margin-top: 0;
    flex-direction: column;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  margin-top: 40px;
  gap: 30px;
  justify-content: flex-end;

  @media screen and (max-width: 1399px) {
    margin-top: 0;
  }
`;
