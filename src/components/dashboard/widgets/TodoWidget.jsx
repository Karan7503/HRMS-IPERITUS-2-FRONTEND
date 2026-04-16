function TodoWidget(){

    const todos = [
        "Complete onboarding documents",
        "Follow up clients",
        "Design LMS wireframe",
        "Create case study"
    ];

    return(

        <div className="bg-bgCard p-5 rounded-xl border border-borderColor">

            <h3 className="font-semibold text-textMain mb-4">
                To-dos
            </h3>

            <ul className="space-y-2">

                {todos.map((t,i)=>(

                    <li
                        key={i}
                        className="
                            bg-bgMain
                            text-textMain
                            p-2
                            rounded
                            border
                            border-borderColor
                            "
                    >

                        {t}

                    </li>

                ))}

            </ul>

        </div>

    );

}

export default TodoWidget;