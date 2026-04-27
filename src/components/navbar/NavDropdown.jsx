import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

function NavDropdown({ label, items = [], align = "right", className=""}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    

   

    // close when clicking outside
    useEffect(() => {

        const handleClickOutside = (event) => {
            if(
                dropdownRef.current && 
                !dropdownRef.current.contains(event.target)
            ){
                setIsOpen(false);
            }
        };

        // Add listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup:Remove listener when component unmounts
        return () => {
            document.removeEventListener('mousedown',handleClickOutside)
        };

    }, [])
  return (

    <div ref={dropdownRef} className="relative inline-block">
       
        {/* NAV BUTTON */}
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={className}
        >
            {label}
        </div>

        {/* DROPDOWN MENU */}
        {isOpen && (
            // ${align === "left" ? "left-0" : "right-0"}
        <div
          className={`
            absolute
            -left-3
            mt-2
            w-44
            bg-bgCard
            border
            border-borderColor

            rounded-lg
            shadow-md
            z-50
            `}
        >

            {items.map((item) => (
                <Link
                    key={item.path}
                    to ={item.path}
                    onClick={() => setIsOpen(false)}
                    // hover:text-primary
                    // text-textMain
                    className="
                        block
                        px-4
                        py-2
                        text-sm
                        font-medium
                        tracking-tight
                        hover:bg-primarySoft

                        rounded-md
                        mx-1
                        my-1

                        transition
                        cursor-pointer
                    "
                >
                    {item.label}
                </Link>
            ))}
        </div>
      )}
    </div>
  );
}

export default NavDropdown              