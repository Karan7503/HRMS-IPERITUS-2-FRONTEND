function Birthdays(){

    const birthdays = [
        "Rahul - April 25",
        "Karan - April 26",
        "Amit - April 27"
    ];

    return(

        <div className="
        bg-bgCard
        p-5
        rounded-xl
        border
        border-borderColor
        shadow-md
        ">

            <h3 className="font-semibold text-textMain mb-3">
                Birthdays
            </h3>

            <div className="space-y-2">

                {birthdays.map((b,i)=>(

                    <div
                        key={i}
                        className="
                        bg-bgMain
                        border
                        border-borderColor
                        rounded-lg
                        p-2
                        text-textMain
                        flex
                        justify-between
                        "
                    >

                        {b}

                        <button
                        className="
                        bg-primary
                        text-white
                        px-2
                        py-1
                        rounded
                        text-xs
                        "
                        >
                            Wish
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Birthdays;