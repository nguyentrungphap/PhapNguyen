import { Modal } from "../Modal"
import { ChatInterface } from "./ChatInterface"
export const ChatModal = ({
    isOpen,
    setIsOpen
} : {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}) => {
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
            <ChatInterface setIsOpen={setIsOpen} />
        </Modal>
    )
}