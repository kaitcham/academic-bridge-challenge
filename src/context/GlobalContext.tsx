import { PropsWithChildren, createContext, useContext, useState } from "react";

export interface GlobalContexProps {
  isDarkMode: boolean;
  isUpdating: boolean;
  isFormModalOpen: boolean;
  isDeleteModelOpen: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  setIsUpdating: (isUpdating: boolean) => void;
  setIsFormModalOpen: (isOpen: boolean) => void;
  setIsDeleteModelOpen: (isOpen: boolean) => void;
}

export const GlobalContext = createContext({} as GlobalContexProps);

export const GlobalProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        isDarkMode,
        isUpdating,
        isFormModalOpen,
        isDeleteModelOpen,
        setIsDarkMode,
        setIsUpdating,
        setIsFormModalOpen,
        setIsDeleteModelOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
