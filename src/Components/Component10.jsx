import mobile from "../assets/mobile.svg";

function Component10() {
    return (
        <div className="flex flex-col lg:flex-row justify-evenly space-x-0 mt-10 items-center">
            <img
                src={mobile}
                alt="Mobile SVG"
                className="w-[300px] lg:w-[500px] h-auto mb-6 lg:mb-0 lg:mr-10 transition-transform duration-300 hover:scale-105"
            />
            <div className="text-center lg:text-left">
                <div className="w-full lg:w-[724px] text-[#3F3D56] text-2xl lg:text-4xl font-semibold font-['Inter'] tracking-wide mb-6 hover:text-red-600 transition-colors duration-300">
                    Experience the best of The Vets in <br /> one app
                </div>
                <div className="mt-4 w-full lg:w-[694px] text-[#000000] text-sm lg:text-base font-light font-['Inter'] tracking-tight mb-12">
                    Download the Sniffi App for a Pawsome Experience! 🐾✨ Book appointments, track pet health,<br /> and get expert care—right at your fingertips!
                </div>
                <img
                    src="/app.jpg"
                    alt=""
                    className="w-[200px] lg:w-[300px] h-auto rounded-lg mx-auto lg:mx-0 transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    );
}

export default Component10;