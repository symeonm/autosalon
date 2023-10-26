import plusSvg from "../../../images/plus.svg";
import { AddImg, ButtonAdd } from "./AddButtonStyledComponent";

export const AddButton = () => {
  return (
    <ButtonAdd>
      <AddImg src={plusSvg} alt="Add Button"></AddImg>
    </ButtonAdd>
  );
};
