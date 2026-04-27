import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function CustomSelect({ 
  label, 
  value, 
  onChange, 
  options = [], 
  placeholder = "Select option",
  required = false,
  name,
  className = ""
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full" ref={containerRef}>
      {label && (
        <label className="form-label">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            input flex items-center justify-between h-[48px] px-4 text-left
            transition-all duration-300
            ${!value ? "text-muted opacity-50 font-medium" : "text-textMain font-bold"}
            ${isOpen ? "border-primary ring-4 ring-primary/10" : ""}
            ${className}
          `}
        >
          <span className="truncate tracking-tight">
            {value || placeholder}
          </span>
          <ChevronDown 
            size={18} 
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="
                absolute z-[100] w-full mt-2 py-2
                bg-bgCard border border-strong rounded-xl shadow-2xl
                max-h-[250px] overflow-y-auto
              "
            >
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`
                    w-full px-4 py-3 text-left text-sm font-medium tracking-tight
                    transition-colors duration-200
                    ${value === option 
                      ? "bg-primarySoft text-primary" 
                      : "text-textMain hover:bg-bgMain hover:text-primary"}
                  `}
                >
                  {option}
                </button>
              ))}
              
              {options.length === 0 && (
                <div className="px-4 py-3 text-sm text-muted text-center italic">
                  No options available
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CustomSelect;
