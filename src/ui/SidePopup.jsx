// import {X} from "lucide-react";

// function SidePopup({
//     isOpen,
//     onClose,
//     title,
//     children,
//     width = "420px"
// }) {
//     if (!isOpen) return null;
//     return(
//         <>
//             {/* overlay */}
//             <div className="
//                 fixed
//                 inset-0
//                 bg-black/20
//                 backdrop-blur-[1px]
//                 z-40
//             "/> 

//             {/* panel */}
//             <div className="
//                 fixed
//                 right-0
//                 top-0
//                 h-full
//                 z-50

//                 bg-bgCard
//                 border-l
//                 border-borderColor

//                 shadow-xl

//                 p-5

//                 overflow-y-auto
//             "
//             style={{width}}
//             >

//               {/* header */}
//             <div className="flex items-center justify-between mb-4">

//             <h2 className="text-lg font-semibold text-textMain">
//                 {title}
//             </h2>

//             <button
//                 onClick={onClose}
//                 className="p-1 hover:bg-primarySoft rounded"
//             >
//                 <X size={18}/>
//             </button>

//             </div>

//             {children}

//         </div>

//         </>
//     )
// }

// export default SidePopup;


import { useEffect } from "react";
import { X } from "lucide-react";

function SidePopup({
    isOpen,
    onClose,
    title,
    children,
    width = "420px"
}) {

    // ✅ ESC key close (from old code)
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);


    if (!isOpen) return null;


    return (
        <>
            {/* ✅ overlay with click outside close */}
            <div
                onClick={onClose}
                className="
                    fixed
                    inset-0
                    bg-black/20
                    backdrop-blur-[1px]
                    z-40
                "
            />


            {/* panel */}
            <div
                className="
                    fixed
                    right-0
                    top-0
                    h-full
                    z-50

                    bg-bgCard
                    border-l
                    border-borderColor

                    shadow-xl

                    p-5

                    overflow-y-auto
                "
                style={{ width }}

                // ✅ prevent closing when clicking inside panel
                onClick={(e) => e.stopPropagation()}
            >

                {/* header */}
                <div className="flex items-center justify-between mb-4">

                    <h2 className="text-lg font-semibold text-textMain">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-primarySoft rounded"
                    >
                        <X size={18} />
                    </button>

                </div>

                {children}

            </div>
        </>
    );
}

export default SidePopup;