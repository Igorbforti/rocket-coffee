import rocketCoffee from "../../assets/rocket-coffee.png"

function Home() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full mt-14">
            <div>
                <p className="font-bold text-[80px] w-full h-[109px]">Great Coffee</p>
            </div>
            <div className="w-full h-[109px] flex justify-center">
                <p className="flex justify-center font-bold text-[80px] w-[548px] text-black drop-shadow-3xl 
                            before:bg-arrow before:bg-no-repeat before:w-[70px] before:h-[45px] before:absolute before:bg-[length:85px_45px] before: before:rotate-180 before:top-10 before:left-0 before:drop-shadow-3xl">
                            Great Code/</p>
            </div>
            <div>
                <img src={rocketCoffee} alt="Coffee"/>
            </div>
        </div>
    )
}

export default Home