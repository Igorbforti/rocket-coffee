import rocketCoffee from "../../assets/rocket-coffee.png"
import arrowMobile from "../../assets/arrowMobile.svg"

const arrowLeft = "<";
const arrowRight = ">";

function Home() {
    return (window.innerWidth) > 768 ? (
        <div className="flex flex-col justify-center items-center w-full h-full mt-14">
            <div>
                <p className="font-bold text-[80px] w-full h-[109px]">Great Coffee</p>
            </div>
            <div className="w-full h-[109px] flex justify-center">
                <h1 className="flex justify-center font-bold text-[80px] w-[600px] text-black">
                    {arrowLeft}Great Code/{arrowRight}
                </h1>
            </div>
            <div>
                <img src={rocketCoffee} alt="Coffee"/>
            </div>
        </div>
    ) : (
        <div className="w-full h-full flex flex-col items-center min-w-screen min-h-screen">
            <p className="flex flex-col items-center justify-center w-[373px] h-[128px] text-3xl mt-[87px] font-bold">
                O café que fará seu<p>código decolar para</p>o próximo nível.
            </p>
            <a 
                href="/"
                className="w-[174px] h-[35px] border border-brand-500 rounded-md text-[11px] font-bold flex justify-center items-center mt-[88px]">
                PEGAR MEU CAFÉ
                <img src={arrowMobile} alt="" className="ml-2 w-3 h-3"/>
            </a>
            <p className="text-[50px] font-bold h-[54px] mt-[98px] mb-[6px]">Great Coffee</p>
            <h1 className="flex justify-center items-center font-bold text-[50px] w-fit h-[69px] text-black">
                {arrowLeft}Great Code/{arrowRight}
            </h1>
                <img src={rocketCoffee} alt="Coffee" className="max-w-full"/>
        </div>
    )
}

export default Home