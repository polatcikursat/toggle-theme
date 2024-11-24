import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useMainContext } from "./Context";

const ToggleTheme = () => {
  const { theme, setTheme } = useMainContext();
  return (
    <>
      {theme === "dark" && (
        <div>
          <MdLightMode
            color="white"
            onClick={() => {
              setTheme("light");
            }}
            size={48}
            className="cursor-pointer"
          />
          <p className="text-secondary">Light</p>
        </div>
      )}
      {theme === "light" && (
        <div>
          <MdDarkMode
            color="black"
            onClick={() => {
              setTheme("dark");
            }}
            size={48}
            className="cursor-pointer"
          />
          <p className="text-primary">Dark</p>
        </div>
      )}
    </>
  );
};

export default ToggleTheme;
