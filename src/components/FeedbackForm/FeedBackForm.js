import { Formik } from "formik";
import {
  FeedBackInput,
  FeedBackModalContainer,
  ModalButton,
  TitleForm,
  TextForm,
  CheckboxModal,
  MobileModal,
  MobileForm,
} from "./FeedBackFormStyledComponent";

export const FeedBackForm = () => {
  const initialValues = { vorname: "", nachname: "", telefon: "", email: "" };

  return (
    <FeedBackModalContainer>
      <TitleForm>Wir senden Ihnen die Datei per E-Mail</TitleForm>
      <Formik initialValues={initialValues}>
        <MobileForm>
          <MobileModal
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "30px",
                flexDirection: "column",
              }}
            >
              <label
                style={{
                  width: "100%",
                }}
              >
                <FeedBackInput
                  placeholder="Vorname"
                  type="text"
                  name="vorname"
                  id="vorname"
                ></FeedBackInput>
              </label>
              <label
                style={{
                  width: "100%",
                }}
              >
                <FeedBackInput
                  placeholder="Telefon"
                  name="telefon"
                  id="telefon"
                  type="tel"
                ></FeedBackInput>
              </label>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "30px",
                flexDirection: "column",
              }}
            >
              <label
                style={{
                  width: "100%",
                }}
              >
                <FeedBackInput
                  placeholder="Nachname"
                  type="text"
                  name="nachname"
                  id="nachname"
                ></FeedBackInput>
              </label>
              <label
                style={{
                  width: "100%",
                }}
              >
                <FeedBackInput
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  id="email"
                ></FeedBackInput>
              </label>
            </div>
          </MobileModal>

          <div style={{ padding: "20px", marginTop: "30px" }}>
            <TextForm style={{ display: "flex" }}>
              <CheckboxModal
                type="checkbox"
                name="checkbox"
                id="checkbox"
              ></CheckboxModal>
              Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen und
              bin damit einverstanden, dass die von mir angegebenen Daten
              elektronisch erhoben und gespeichert werden. Meine Daten werden
              dabei nur streng zweckgebunden zur Bearbeitung und Beantwortung
              meiner Anfrage benutzt und nicht an Dritte weitergegeben. Mit dem
              Absenden des Kontaktformulars erkläre ich mich mit der
              Verarbeitung einverstanden.
            </TextForm>
          </div>

          <ModalButton>
            <button
              style={{
                border: "1px solid var(--Border-Color-Light, #DFE2ED)",
                width: "156px",
                height: "53px",
                color: "#000",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              Abbrechen
            </button>
            <button
              style={{
                background: "var(--Main-Color, #213584)",
                width: "127px",
                height: "53px",
                color: "#FFF",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              Senden
            </button>
          </ModalButton>
        </MobileForm>
      </Formik>
    </FeedBackModalContainer>
  );
};
