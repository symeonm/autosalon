import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export const SectionHeader = styled.header`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--Border-Color-Light, #dfe2ed);
  background: var(--Light-Color, #fff);
  width: 100%;
  padding: 20px 140px;
  @media screen and (max-width: 768px) {
    padding: 20px 60px;
  }
`;

export const SectionNav = styled.div`
  @media screen and (max-width: 969px) {
    display: none;
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

export const BurgerButton = styled.button`
  background: none;
  border: 0ch;
  padding: 0;
  display: flex;
  align-items: center;
  @media screen and (min-width: 335px) {
    display: block;
  }
  @media screen and (min-width: 970px) {
    display: none;
  }
`;

export const BurgerIcon = styled(RxHamburgerMenu)`
  width: 34px;
  height: 34px;
  &:active {
    color: #213584;
  }
`;
