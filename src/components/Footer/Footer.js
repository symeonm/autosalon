import {
  SectionFooter,
  FooterList,
  ButtonFooter,
} from "./FooterStyledComponent";
import editSvg from "../../images/edit.svg";
import moneySvg from "../../images/money.svg";
export const Footer = () => {
  return (
    <SectionFooter>
      <FooterList>
        <li>
          <ButtonFooter style={{ background: "#EDF0F8", border: "none" }}>
            <img
              src={editSvg}
              alt="Edit"
              style={{ marginRight: "10px", width: "30px", height: "30px" }}
            ></img>
            <p>Weiter konfigurieren</p>
          </ButtonFooter>
        </li>
        <li>
          <ButtonFooter>
            <img
              src={moneySvg}
              alt="Money"
              style={{ marginRight: "10px", width: "30px", height: "30px" }}
            ></img>
            <p>Finanzierungsrechner</p>
          </ButtonFooter>
        </li>
        <li>
          <button
            style={{
              padding: "15px 30px",
              background: "var(--Main-Color, #213584)",
              color: "var(--Light-Color, #FFF)",
              fontFamily: "Roboto",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Angebot anfordern
          </button>
        </li>
      </FooterList>
    </SectionFooter>
  );
};
