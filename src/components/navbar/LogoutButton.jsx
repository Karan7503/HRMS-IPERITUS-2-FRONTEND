import { useNavigate } from "react-router-dom";

function LogoutButton(){

    const navigate = useNavigate();

    const logoutUser = () => {

        localStorage.removeItem("token");
        navigate("/");

    };

    return (

        <button
            onClick={logoutUser}
            className="
                bg-primary
                hover:bg-primaryHover
                text-white
                mr-3
                px-3
                py-1
                rounded
                transition
                cursor-pointer
            "
        >
            Logout
        </button>

    );

}

export default LogoutButton;