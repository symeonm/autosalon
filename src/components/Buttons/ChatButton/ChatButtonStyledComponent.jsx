import styled from "styled-components";

export const ButtonChat = styled.button`
  position: fixed;
  right: 30px;
  bottom: 41px;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background: var(--Main-Color, #213584);

  @media screen and (max-width: 970px) {
    width: 60px;
    height: 60px;
  }
`;

export const ChatImg = styled.img`
  @media screen and (max-width: 970px) {
    width: 30px;
    height: 30px;
  }
`;
