import { useState } from "react";
import chatSvg from "../../../images/chat.svg";
import { FeedBackForm } from "../../FeedbackForm/FeedBackForm";
import { Modal } from "../../Modal/Modal";
import { ButtonChat } from "./ChatButtonStyledComponent";

export const ChatButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ButtonChat type="button" onClick={openModal}>
        <img src={chatSvg} alt="Chat Button"></img>
      </ButtonChat>
      {isModalOpen && (
        <Modal
          children={<FeedBackForm />}
          onClose={() => setIsModalOpen(false)}
          isOpenModal={isModalOpen}
        />
      )}
    </>
  );
};
