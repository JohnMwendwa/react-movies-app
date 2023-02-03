import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  openModal: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export default function Modal({ openModal, closeModal, children }: ModalProps) {
  if (!openModal) return null;
  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 z-[999px] bg-gray-600 opacity-75"
        onClick={closeModal}
      />
      <div className="fixed top-[50%] left-[50%] z-[999px] -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md">
        {children}
      </div>
    </>,
    document.getElementById("modal")!
  );
}
