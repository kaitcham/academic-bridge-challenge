import { PropsWithChildren, createContext, useContext, useState } from "react";

export interface GlobalContexProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const GlobalContext = createContext({} as GlobalContexProps);

export const GlobalProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
