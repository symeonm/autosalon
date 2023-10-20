import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1862px) {
    margin-top: 60.5px;
    max-width: 1070px;
    margin-left: auto;
    margin-right: auto;
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
`;

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
`;
