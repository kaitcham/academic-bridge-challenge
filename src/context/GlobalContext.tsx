import { PropsWithChildren, createContext, useContext, useState } from "react";

export interface GlobalContexProps {
  isDarkMode: boolean;
  isFormModalOpen: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  setIsFormModalOpen: (isOpen: boolean) => void;
}

export const GlobalContext = createContext({} as GlobalContexProps);

export const GlobalProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isDarkMode,
        isFormModalOpen,
        setIsDarkMode,
        setIsFormModalOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
