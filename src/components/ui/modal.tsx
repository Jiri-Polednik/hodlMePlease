"use client";

import React, { FC, ReactNode, useEffect, useRef } from "react";
import { useModal } from "@context/ModalContext";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const { isModalOpen, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center"
    >
      {children}
    </div>
  );
};

export default Modal;
