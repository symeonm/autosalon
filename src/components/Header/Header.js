import {
  LogoCompany,
  SectionHeader,
  StyledLink,
  NavList,
  VerticalLine,
} from "./HeaderStyledComponent";

import logoSvg from "../../images/logo.svg";
import languageSvg from "../../images/language.svg";
import chevronDown from "../../images/chevron-down.svg";
export const Header = () => {
  return (
    <SectionHeader>
      <div>
        <LogoCompany src={logoSvg} alt="Logo Company"></LogoCompany>
      </div>
      <div>
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
      </div>
    </SectionHeader>
  );
};
