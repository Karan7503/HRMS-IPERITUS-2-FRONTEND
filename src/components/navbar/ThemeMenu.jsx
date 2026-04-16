import ThemeOption from "./ThemeOption";
import { themes } from "./themeConfig";

function ThemeMenu({ theme, onSelect }) {
  const size = 15;

  return (
    <div 
      className="
        absolute 
        right-[-6px] 
        top-12 
        w-[220px] 
        p-3 
        grid 
        grid-cols-3 
        gap-x-2 
        gap-y-3 
        bg-bgCard 
        border 
        border-borderColor 
        rounded-xl 
        shadow-lg 
        z-50
    ">
      {themes.map((t) => (
        <ThemeOption
          key={t.key}
          label={t.label}
          active={theme === t.key}
          icon={t.icon(size)}
          onClick={() => onSelect(t.key)}
        />
      ))}
    </div>
  );
}

export default ThemeMenu;
