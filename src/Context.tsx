import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface IMainContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const savedTheme = localStorage.getItem("theme");
const defaultTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : "dark";

const MainContext = createContext<IMainContext>({
  theme: defaultTheme,
  setTheme: () => {},
});

interface IMainProviderProps {
  children: ReactNode;
}

export const MainProvider: React.FC<IMainProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return <MainContext.Provider value={{ theme, setTheme }}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext)