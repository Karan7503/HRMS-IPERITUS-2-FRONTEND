function ThemeOption({ icon, label, active, onClick }){

    return (

        <button
            onClick={onClick}

            className={`
                flex
                flex-col
                items-center
                justify-center
                gap-1
                

                w-16
                h-16

                rounded-lg
                cursor-pointer
                hover:bg-primarySoft
                
                ${active ? "bg-primarySoft" : ""}
                `}
        >
            {/* hover:scale-102 */}

            {icon}
            
            <span className="
                text-xs
                font-normal
                text-textMain
            ">
                {label}
            </span>

        </button>

    );

}

export default ThemeOption;