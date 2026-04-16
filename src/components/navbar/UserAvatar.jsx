import { User, CircleUserRound } from "lucide-react";

// circle-user-round

function UserAvatar({ name = "K" }) {

  return (

    // <div
    //   className="
    //     w-9
    //     h-9

    //     flex
    //     items-center
    //     justify-center

    //     rounded-full

    //     bg-primarySoft
    //     text-textMain

    //     border
    //     border-borderColor

    //     font-medium
    //     text-sm
    //   "
    // >

    //   {name}

    // </div>

    <div>
        {/* <User/> */}
        <CircleUserRound />
    </div>

  );

}

export default UserAvatar;

