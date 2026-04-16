function QuickActions(){

  const actions = [
    "Manage Employees",
    "Manage Attendance",
    "Manage Leave"
  ];

  return(

    <div>

      <h3 className="text-textMain font-semibold mb-3">
        Quick Actions
      </h3>

      <div className="flex flex-wrap gap-3">

        {actions.map((a,i)=>(

          <button
            key={i}

            className="
              bg-bgCard

              border border-borderColor

              text-textMain

              px-4 py-2

              rounded-full

              text-sm

              hover:bg-primarySoft
            "
          >

            {a}

          </button>

        ))}

      </div>

    </div>

  );

}

export default QuickActions;