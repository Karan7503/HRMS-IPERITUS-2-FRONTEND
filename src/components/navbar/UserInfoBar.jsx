import UserDropdown from "./UserDropdown";

function UserInfoBar() {

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    // later this can come from auth context
    const userName = "Karan Singh Rawat";

    return (

        <div
            className="
              
        
             
              
            "
        >

            <div className="flex items-center gap-4">




                <span className="text-textSecondary">
                    {formattedDate}
                </span>


            </div>

        </div>

    );

}

export default UserInfoBar;