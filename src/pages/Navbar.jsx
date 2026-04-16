import ThemeDropdown from "../components/navbar/ThemeDropdown";
import LogoutButton from "../components/navbar/LogoutButton";

import { useLocation } from "react-router-dom";
import Logo from "../components/navbar/Logo1";
import NavItem from "../components/navbar/NavItem";
import UserAvatar from "../components/navbar/UserAvatar";
import UserDropdown from "../components/navbar/UserDropdown";

function Navbar(){

    const location = useLocation();

    const isLoginPage = location.pathname === "/";

    return(

        <nav className="
            bg-bgCard
            border-b
            border-borderColor
            px-6
            h-16
            flex
            items-center
            justify-between
            shadow-sm
        ">

            <Logo/>

            {!isLoginPage && (

                <div className="
                    flex
                    items-center
                    gap-8
                    text-textMain
                ">

                    <NavItem
                        label="Dashboard"
                        path="/dashboard"
                    />

                    <NavItem
                        label="Tools"
                        items={[
                            { label: "Attendance", path: "/attendance" },
                            { label: "Leave", path: "/leave" },
                            { label: "Requests", path: "/requests" },
                        ]}
                    />

                    <NavItem
                        label="Book"
                        items={[
                            { label: "Resume", path: "/resume" },
                            { label: "Data", path: "/data" }
                        ]}
                    />

                    <ThemeDropdown/>

                    {/* <LogoutButton/>
                    <UserAvatar/> */}

                    <UserDropdown/>

                </div>

            )}

        </nav>

    );

}

export default Navbar;