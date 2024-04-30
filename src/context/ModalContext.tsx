"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  FC,
} from "react";

interface ModalContextType {
  isModalOpen: boolean;
  variant: "contact" | "demo" | null; // Defines the possible variants and null when no modal is active
  openModal: (variant: "contact" | "demo") => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  variant: null,
  openModal: () => {},
  closeModal: () => {},
});

export function useModal(): ModalContextType {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [variant, setVariant] = useState<"contact" | "demo" | null>(null);

  const openModal = useCallback((variant: "contact" | "demo") => {
    console.log(`Opening ${variant} Modal`);
    setIsModalOpen(true);
    setVariant(variant);
  }, []);

  const closeModal = useCallback(() => {
    console.log("Closing Modal");
    setIsModalOpen(false);
    setVariant(null); // Reset the variant when modal closes
  }, []);

  const value = {
    isModalOpen,
    variant,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
