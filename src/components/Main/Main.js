import {
  Container,
  NameAuto,
  SubTitle,
  CopyNumber,
  NumberAuto,
  BrendAuto,
  Description,
  Price,
  Paragraph,
  AutoInfo,
} from "./MainStyledComponent";
import copySvg from "../../images/copy.svg";
import kresloSvg from "../../images/kreslo.svg";
import kresloSvg2 from "../../images/kreslo2.svg";
import transmissionSvg from "../../images/transmission.svg";
import kvSvg from "../../images/kv.svg";
import { Hero } from "../Hero/Hero";

export const Main = () => {
  return (
    <Container>
      <AutoInfo>
        <div>
          <NameAuto>Vito Tourer Pro Lang 114</NameAuto>
          <SubTitle>
            <BrendAuto>Mercedes Benz</BrendAuto>
            <CopyNumber>
              <NumberAuto>5036TWE7</NumberAuto>
              <button>
                <img
                  src={copySvg}
                  alt="Copy Button"
                  width={30}
                  height={30}
                ></img>
              </button>
            </CopyNumber>
          </SubTitle>
          <div style={{ marginTop: "30px" }}>
            <ul style={{ display: "flex", gap: "60px" }}>
              <li
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={kresloSvg}
                  alt="Places"
                  style={{ width: "34px", height: "34px" }}
                ></img>
                <Description>4/4</Description>
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={kresloSvg2}
                  alt="Front Seat"
                  style={{ width: "34px", height: "34px" }}
                ></img>
                <Description>1</Description>
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={transmissionSvg}
                  alt="Transmission"
                  style={{ width: "34px", height: "34px" }}
                ></img>
                <Description>Automatik</Description>
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={kvSvg}
                  alt="Power"
                  style={{ width: "34px", height: "34px" }}
                ></img>
                <Description>103kW / 140PS</Description>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Price>49 338,00 €</Price>
          <Paragraph>inkl. 19% MwSt.</Paragraph>
        </div>
      </AutoInfo>
      <Hero />
    </Container>
  );
};
