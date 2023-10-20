import styled from "styled-components";
import { Field } from "formik";
import checkSvg from "../../images/check.svg";

export const FeedBackModalContainer = styled.div`
  display: flex;
  width: 773px;
  padding: 40px 40px 20px 40px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #dfe2ed;
  background: #fff;
`;

export const TitleForm = styled.h3`
  color: #000;
  align-self: stretch;
  margin-bottom: 30px;
  font-family: Montserrat;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FeedBackInput = styled(Field)`
  width: 100%;
  height: 51px;
  display: block;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  padding-left: 30px;
  border: 1px solid var(--Secondary-Color-Border, #3c888a);
  color: var(--Placeholder-Color, #9da3b8);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  box-sizing: border-box;
`;

export const ModalButton = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  border-top: 1px solid var(--Border-Color-Light, #dfe2ed);
  background: var(--Light-Color, #fff);
  box-sizing: border-box;
`;

export const TextForm = styled.label`
  color: var(--Placeholder-Color, #9da3b8);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const CheckboxModal = styled(Field)`
  width: 100px;
  height: 28px;
  border: 1px solid #2b6364;
  border-radius: 50%;
  margin: 0 10px 0 0;
  appearance: none;

  &:checked {
    background-image: url("${checkSvg}");
    /* background-color: red; */
    background-size: contain;
    background-origin: border-box;
  }
`;
