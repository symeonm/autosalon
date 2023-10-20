import plusSvg from "../../../images/plus.svg";
import { ButtonAdd } from "./AddButtonStyledComponent";

export const AddButton = () => {
  return (
    <ButtonAdd>
      <img src={plusSvg} alt="Add Button"></img>
    </ButtonAdd>
  );
};
