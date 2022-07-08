import { Link } from "react-router-dom"
import rocketLogo from "../../assets/logo-desktop.svg"
import logoMobile from "../../assets/logo-mobile.svg"
import openIcon from "../../assets/menu-buguer-open.svg"
import closeIcon from "../../assets/menu-buguer-close.svg"
import { useState } from "react"
import { MenuData } from "../Menu/MenuData"

const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (window.innerWidth) > 768 ? (
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
    ) : (
        <>
            <div className="flex justify-between items-center p-[25px] h-[95px] w-full border-b border-gray-500">
                <img src={logoMobile} alt="Logo" />
                <Link to="#" onClick={showSidebar}>
                    {!sidebar ? <img src={openIcon} alt="open menu" /> : <img src={closeIcon} alt="close menu" />}
                </Link>
            </div>
                <nav className={sidebar ? "" : "fixed left-[-100%]"}>
                    <ul className="h-screen w-screen border-b border-gray-500">
                        {MenuData.map((item, index) => {
                            return (
                                <li key={index} className="py-[18px] pl-[30px] border-b border-gray-500 text-[#a8a8b3] text-lg hover:border-l-4 hover:border-l-brand-500 hover:text-white hover:font-bold">
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
        </>
    )
}

export default Header