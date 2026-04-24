function SummaryCards() {

  const cards = [

    {
      title: "Present Today",
      value: "12"
    },

    {
      title: "Absent Today",
      value: "3"
    },

    {
      title: "Avg Attendance %",
      value: "92%"
    }

  ];

  return (

    <div
      className="
        grid
        md:grid-cols-3

        gap-4
      "
    >

      {cards.map((c, i) => (

        <div
          key={i}

          className="
            bg-bgCard

            border border-borderColor

            p-4

            rounded-xl

            shadow-sm
          "
        >

          <p className="text-textMain text-sm">
            {c.title}
          </p>

          <p className="text-xl font-semibold text-textMain mt-2">
            {c.value}
          </p>

        </div>

      ))}

    </div>

  );

}

export default SummaryCards;