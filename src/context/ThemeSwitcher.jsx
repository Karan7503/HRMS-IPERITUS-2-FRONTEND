import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeSwitcher() {

  const { theme, setTheme } = useContext(ThemeContext);

  return (

    <div className="flex gap-2">

      <button
        onClick={() => setTheme("light")}
        className="px-3 py-1 rounded bg-primary text-white"
      >
        Light
      </button>

      <button
        onClick={() => setTheme("dark")}
        className="px-3 py-1 rounded bg-primary text-white"
      >
        Dark
      </button>

      <button
        onClick={() => setTheme("ocean")}
        className="px-3 py-1 rounded bg-primary text-white"
      >
        Ocean
      </button>

    </div>

  );

}

export default ThemeSwitcher;