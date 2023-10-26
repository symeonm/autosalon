// import LogoutBtn from "./LogoutBtn/LogoutBtn";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { AsideSidebar, CloseBtn } from "./SidebarStyledComponent";

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
        <ul>
          <li>
            <NavLink>Konfigurator</NavLink>
          </li>
          <li>
            <NavLink>Video-Archiv</NavLink>
          </li>
          <li>
            <NavLink>Kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </AsideSidebar>
  );
}
