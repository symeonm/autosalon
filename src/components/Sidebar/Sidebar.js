// import LogoutBtn from "./LogoutBtn/LogoutBtn";
import { RxCross1 } from "react-icons/rx";

import css from "./Sidebar.module.css";

export default function SideBar({ toggleSidebar }) {
  return (
    <aside className={css.sidebar}>
      <button
        className={css.close__btn}
        onClick={toggleSidebar}
        type="button"
        aria-label="Close"
      >
        <RxCross1 className={css.close__icon} />
      </button>
    </aside>
  );
}
