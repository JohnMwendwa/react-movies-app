import ReactDOM from "react-dom";

interface ModalProps {
  openModal: boolean;
}

export default function Modal({ openModal }: ModalProps) {
  if (!openModal) return null;
  return ReactDOM.createPortal(
    <div>Modal</div>,
    document.getElementById("modal")!
  );
}
