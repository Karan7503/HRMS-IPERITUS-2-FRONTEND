import { useState } from "react";

function Tabs({ tabs = [] }) {

  const [activeTab, setActiveTab] = useState(0);

  return (

    <div className="text-textMain">

      {/* TAB HEADER */}
      <div
        className="
          flex
          gap-6
          border-b
          border-borderColor
          mb-4
        "
      >

        {tabs.map((tab, index) => (

          <button
            key={index}
            onClick={() => setActiveTab(index)}

            className={`
              pb-2
              text-xl
              font-normal

              transition

              ${
                activeTab === index
                  ? "border-b text-primary border-primary"
                  : "text-textMain hover:text-primary"
              }
            `}
          >
            {tab.label}
          </button>

        ))}

      </div>

      {/* TAB CONTENT */}
      <div>

        {tabs[activeTab].content}

      </div>

    </div>

  );

}

export default Tabs;