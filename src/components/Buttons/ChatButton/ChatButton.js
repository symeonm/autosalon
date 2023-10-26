import { useState } from "react";
import chatSvg from "../../../images/chat.svg";
import { FeedBackForm } from "../../FeedbackForm/FeedBackForm";
import { Modal } from "../../Modal/Modal";
import { ButtonChat, ChatImg } from "./ChatButtonStyledComponent";

export const ChatButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <ButtonChat type="button" onClick={openModal}>
        <ChatImg src={chatSvg} alt="Chat Button"></ChatImg>
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
