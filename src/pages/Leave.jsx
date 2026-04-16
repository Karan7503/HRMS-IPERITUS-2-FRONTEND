import Tabs from "../ui/Tabs";


function Leave() {

  const tabs = [

    {
      label: "Manage Leave",

      content: (

        <div
          className="
            bg-bgCard
            p-4
            rounded-lg
            border
            border-borderColor
          "
        >

          <h2 className="text-lg mb-3">
            Manage Leave
          </h2>

          <p className="text-sm opacity-70">
            Apply, cancel or track leave status.
          </p>

        </div>

      )
    },

    {
      label: "Holiday",

      content: (

        <div
          className="
            bg-bgCard
            p-4
            rounded-lg
            border
            border-borderColor
          "
        >

          <h2 className="text-lg mb-3">
            Holiday List
          </h2>

          <p className="text-sm opacity-70">
            List of company holidays.
          </p>

        </div>

      )
    }

  ];

  return (

    <div
      className="
        bg-bgMain
        min-h-screen
        p-6
      "
    >

      <Tabs tabs={tabs} />

    </div>

  );

}

export default Leave;


// 5️⃣ Example reuse later
// <Tabs
//   tabs={[
//     { label: "Profile", content: <Profile/> },
//     { label: "Security", content: <Security/> }
//   ]}
// />