import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from '../../context/ThemeContext';

import ThemeToggleButton from './ThemeToggleButton';
import ThemeMenu from "./ThemeMenu";

function ThemeDropdown() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <ThemeToggleButton
        theme={theme}
        onClick={() => setOpen(!open)}
      />

      {open && (
        <ThemeMenu
          theme={theme}
          onSelect={changeTheme}
        />
      )}
    </div>
  );
}

export default ThemeDropdown;