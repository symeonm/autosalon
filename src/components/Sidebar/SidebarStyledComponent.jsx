import styled from "styled-components";

export const AsideSidebar = styled.aside`
  position: fixed; /*for button*/
  right: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  z-index: 999;
  /* background-color: whitesmoke;/*тимчасово для тесту*/
  background-color: #fff; /* #FFF - колір згідно ТЗ*/
  padding: 24px 20px;
  height: 100%;
  max-width: 350px;
  width: 100%;
`;

/* @media screen and (min-width: 335px) {
  .sidebar.openSidebar {
    max-width: 289px;
    padding: 24px 32px;
    height: 100%;
    transform: translateX(0);
    transition-duration: 1000ms;
  }
} */

export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  right: 300px;
  top: 29.5px;
  padding: 0;

  cursor: pointer;
`;
