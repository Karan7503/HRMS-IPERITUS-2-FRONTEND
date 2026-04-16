import Tabs from "../../ui/Tabs"
import ManageRequests from "./ManageRequests"


function RequestsTabs() {


  const tabs = [

    {
      label: "Manage Requests",
      content: <ManageRequests />
    }

  ];

  return <Tabs tabs={tabs} />;
}

export default RequestsTabs