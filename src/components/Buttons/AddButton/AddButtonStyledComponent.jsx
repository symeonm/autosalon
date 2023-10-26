import styled from "styled-components";

export const ButtonAdd = styled.button`
  position: absolute;
  left: 80px;
  top: 40%;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background: var(--Main-Color, #213584);
  @media screen and (max-width: 970px) {
    width: 60px;
    height: 60px;
  }
`;
