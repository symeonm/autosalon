import { NavLink } from "react-router-dom";
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

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const StyledLinkSidebar = styled(NavLink)`
  color: var(--Dark-Color, #000);
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
`;
