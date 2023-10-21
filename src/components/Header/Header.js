import {
  LogoCompany,
  SectionHeader,
  StyledLink,
  NavList,
  VerticalLine,
  BurgerButton,
  BurgerIcon,
  SectionNav,
} from "./HeaderStyledComponent";

import logoSvg from "../../images/logo.svg";
import languageSvg from "../../images/language.svg";
import chevronDown from "../../images/chevron-down.svg";
import { useState } from "react";
import SideBar from "../Sidebar/Sidebar";

export const Header = () => {
  const [isOpenSidebar, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpenSidebar);
  };

  return (
    <SectionHeader>
      <div>
        <LogoCompany src={logoSvg} alt="Logo Company"></LogoCompany>
      </div>
      <BurgerButton onClick={toggleSidebar}>
        <BurgerIcon />
      </BurgerButton>
      {isOpenSidebar && (
        <SideBar toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar} />
      )}
      <SectionNav>
        <nav>
          <NavList>
            <li>
              <StyledLink>Konfigurator</StyledLink>
            </li>
            <li>
              <StyledLink>Video-Archiv</StyledLink>
            </li>
            <li>
              <StyledLink>Kontakt</StyledLink>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "50px",
                borderLeftWidth: "1px",
                borderLeftHeight: "100%",
                borderLeftStyle: "solid",
                borderLeftColor: "var(--Border-Color-Light, #DFE2ED)",
              }}
            >
              <img
                src={languageSvg}
                alt="Language"
                style={{ width: "34px", height: "34px", marginRight: "10px" }}
              ></img>
              <p
                style={{
                  color: "var(--Dark-Color, #000)",
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  textDecoration: "none",
                }}
              >
                Deutsch
              </p>
              <button
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={chevronDown} alt="Choose a language"></img>
              </button>
            </li>
          </NavList>
          <VerticalLine></VerticalLine>
        </nav>
      </SectionNav>
    </SectionHeader>
  );
};
