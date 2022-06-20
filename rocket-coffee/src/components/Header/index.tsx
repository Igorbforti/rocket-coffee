import rocketLogo from "../../assets/logo-desktop.svg"

function Header() {
    return (
        <div className="flex items-center h-12 mt-8">
            <div className="w-1/3 h-12 flex justify-center">
                <img src={rocketLogo} alt="Logo"/>
            </div>
            <div className="w-1/3 flex justify-center">
                <a href="" className="text-sm mr-8">Home</a>
                <a href="" className="text-sm mr-8">Menu</a>
                <a href="" className="text-sm mr-8">Recompensas</a>
                <a href="" className="text-sm mr-8">Gift Cards</a>
                <a href="" className="text-sm">Lojas</a>
            </div>
            <div className="w-1/3 flex justify-center">
                <button className="text-xs font-bold border-2 rounded-md border-solid border-brand-500 w-44 h-9">PEGAR MEU CAFÉ</button>
            </div>
        </div>
    )
}

export default Header