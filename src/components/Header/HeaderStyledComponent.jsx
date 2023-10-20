import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SectionHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--Border-Color-Light, #dfe2ed);
  background: var(--Light-Color, #fff);
  @media screen and (min-width: 1862px) {
    max-width: 1862px;
    padding: 20px 140px;
  }
`;

export const LogoCompany = styled.img`
  width: 159px;
  height: 43px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const StyledLink = styled(NavLink)`
  color: var(--Dark-Color, #000);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
`;

export const VerticalLine = styled.div`
  display: block;
  width: 1px;
  align-self: stretch;
  background: var(--Border-Color-Light, #dfe2ed);
`;
