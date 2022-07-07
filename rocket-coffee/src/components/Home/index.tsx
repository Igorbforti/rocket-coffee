import rocketCoffee from "../../assets/rocket-coffee.png"
import arrow from "../../assets/arrow.svg"

function Home() {
    return (window.innerWidth) > 768 ? (
        <div className="flex flex-col justify-center items-center w-full h-full mt-14">
            <div>
                <p className="font-bold text-[80px] w-full h-[109px]">Great Coffee</p>
            </div>
            <div className="w-full h-[109px] flex justify-center">
                <h1 className="flex justify-center font-bold text-[80px] w-[548px] text-black 
                            before:bg-arrow before:bg-no-repeat before:w-[70px] before:h-[45px] before:absolute before:bg-[length:85px_45px] before:rotate-180 before:top-10 before:left-0
                            after:bg-arrow after:bg-no-repeat after:w-[70px] after:h-[45px] after:absolute after:bg-[length:85px_45px] after:top-10 after:right-0"
                >
                            Great Code/
                </h1>
            </div>
            <div>
                <img src={rocketCoffee} alt="Coffee"/>
            </div>
        </div>
    ) : (
        <div className="w-full h-full flex flex-col items-center bg-blurMobile bg-no-repeat min-w-screen min-h-screen bg-cover">
            <p className="flex flex-col items-center justify-center w-[373px] h-[128px] text-3xl mt-[87px] font-bold">
                O café que fará seu<p>código decolar para</p>o próximo nível.
            </p>
            <a 
                href="/"
                className="w-[174px] h-[35px] border border-brand-500 rounded-md text-[11px] font-bold flex justify-center items-center mt-[88px]
                after:bg-arrowMobile after:bg-no-repeat after:w-[7px] after:h-[13px] after:bg-[length:7px_11px] after:block after:left-[250px] after:ml-[10px]">
                PEGAR MEU CAFÉ
            </a>
            <p className="text-[50px] font-bold h-[54px] mt-[98px] mb-[6px]">Great Coffee</p>
            <div className="flex">
                <img src={arrow} alt="" className="rotate-180 mr-1 w-5" />
            <h1 className="flex justify-center items-center font-bold text-[50px] w-fit h-[69px] text-black">
                Great Code/
            </h1>
                <img src={arrow} alt="" className="ml-1 w-5" />
            </div>
                <img src={rocketCoffee} alt="Coffee" className="max-w-full"/>
        </div>
    )
}

export default Home