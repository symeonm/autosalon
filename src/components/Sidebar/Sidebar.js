// import LogoutBtn from "./LogoutBtn/LogoutBtn";
import { RxCross1 } from "react-icons/rx";

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
        </SidebarList>
      </nav>
    </AsideSidebar>
  );
}
