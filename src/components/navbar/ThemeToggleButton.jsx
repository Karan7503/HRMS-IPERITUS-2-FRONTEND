import { themes } from "./themeConfig.jsx";

function ThemeToggleButton({ theme, onClick }) {
  const current = themes.find((t) => t.key === theme);

  return (
    <button
      onClick={onClick}
      className="
      flex 
      items-center 
      justify-center 
      w-9 
      h-9 
      rounded-full 
      border 
      border-strong 
      bg-bgMain 
      hover:bg-primarySoft 
      cursor-pointer
      "
    >
      {current?.icon(16)}
    </button>
  );
}

export default ThemeToggleButton;
