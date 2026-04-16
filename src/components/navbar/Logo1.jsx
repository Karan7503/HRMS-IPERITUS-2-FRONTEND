import logo from "../../assets/IPeritusLogo.png";

function Logo1(){

    return (

        <div className="flex items-center gap-3">

            <img
                src={logo}
                alt="Peritus Logo"
                className="h-7 w-auto object-contain"
            />

        </div>

    );

}

export default Logo1;