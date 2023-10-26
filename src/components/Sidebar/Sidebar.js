// import LogoutBtn from "./LogoutBtn/LogoutBtn";
import { RxCross1 } from "react-icons/rx";
import languageSvg from "../../images/language.svg";
import chevronDown from "../../images/chevron-down.svg";
import {
  AsideSidebar,
  CloseBtn,
  SidebarList,
  StyledLinkSidebar,
} from "./SidebarStyledComponent";

export default function SideBar({ toggleSidebar }) {
  return (
    <AsideSidebar>
      <CloseBtn onClick={toggleSidebar} type="button" aria-label="Close">
        <RxCross1
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#ffffff",
            color: "black",
            transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </CloseBtn>
      <nav>
        <SidebarList>
          <li
            style={{
              textAlign: "right",
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "#DFE2ED",
              paddingBottom: "30px",
              paddingTop: "30px",
            }}
          >
            <StyledLinkSidebar>Konfigurator</StyledLinkSidebar>
          </li>
          <li
            style={{
              textAlign: "right",
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "#DFE2ED",
              paddingBottom: "30px",
              paddingTop: "30px",
            }}
          >
            <StyledLinkSidebar>Video-Archiv</StyledLinkSidebar>
          </li>
          <li
            style={{
              textAlign: "right",
              borderBottomWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "#DFE2ED",
              paddingBottom: "30px",
              paddingTop: "30px",
            }}
          >
            <StyledLinkSidebar>Kontakt</StyledLinkSidebar>
          </li>
          <li
            style={{
              paddingTop: "30px",
              display: "flex",
              justifyContent: "center",
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
                fontSize: "30px",
              }}
            >
              Deutsch
            </p>
            <button
              style={{
                marginLeft: "10px",
              }}
            >
              <img
                src={chevronDown}
                alt="Choose a language"
                style={{
                  width: "20px",
                  height: "20px",
                }}
              ></img>
            </button>
          </li>
        </SidebarList>
      </nav>
    </AsideSidebar>
  );
}
