function Component3() {
  const features = [
    "Quality",
    "On-Time Services",
    "Convenience",
    "Availability",
    "Affordability",
    "Experts",
  ];

  return (
    <>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-center flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold relative group">
          How it{" "}
          <span className="text-red-500 font-semibold">works with us?</span>
          <span className="absolute left-1/2 bottom-0 w-0 h-1 bg-red-500 transition-all duration-500 ease-out group-hover:w-full group-hover:left-0"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-8 sm:gap-x-12 lg:gap-x-16 mt-8 sm:mt-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-red-200 text-gray-800 rounded-lg py-6 sm:py-8 lg:py-10 px-4 sm:px-6 flex flex-col items-center shadow-sm transition-colors hover:bg-red-300 ${
                index === 4 ? "sm:col-start-2 sm:row-start-2" : index === 5 ? "sm:col-start-3 sm:row-start-2" : ""
              }`}
            >
              <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-white rounded-full mb-3 sm:mb-4 lg:mb-5 border-2 border-red-300"></div>
              <h3 className="font-semibold text-base sm:text-lg lg:text-xl">{feature}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">{`Lorem Ipsum`}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Component3;