const Component7 = () => {
  return (
    <>
      <div className="w-full mx-auto px-6 py-10 bg-red-100 flex flex-col  gap-6 overflow-hidden">
        <div className="w-full flex flex-col justify-start items-center gap-10">
          <div className="w-full text-center">
            <span className="text-Primary-Red text-4xl md:text-6xl font-bold tracking-wide transition-colors duration-300 hover:text-red-500">
              Contact
            </span>
            <span className="text-Dark-Primary text-4xl md:text-6xl font-bold tracking-wide transition-colors duration-300 hover:text-blue-500">
              {" "}Us
            </span>
          </div>
          <div className="w-full flex justify-center items-center gap-10 flex-wrap">
            <div className="w-40 h-40 md:w-48 md:h-48 relative bg-red-200 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-20 md:w-24 left-1/4 top-1/4 absolute flex flex-col justify-start items-center gap-2">
                <div className="w-10 md:w-12 h-10 md:h-12 relative bg-white rounded-full outline-1 outline-Primary-Red flex justify-center items-center text-2xl md:text-3xl transform transition-transform duration-300 hover:scale-110">
                  📞
                </div>
                <div className="text-center text-Dark-Primary text-lg md:text-xl font-semibold leading-loose tracking-normal">
                  Contact
                </div>
                <div className="text-center text-Dark-Primary text-xs md:text-sm font-normal uppercase tracking-normal truncate">
                  987-4556-321
                </div>
              </div>
            </div>
            <div className="w-40 h-40 md:w-48 md:h-48 relative bg-red-200 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-20 md:w-24 left-1/4 top-1/4 absolute flex flex-col justify-start items-center gap-2">
                <div className="w-10 md:w-12 h-10 md:h-12 relative bg-white rounded-full outline-1 outline-Primary-Red flex justify-center items-center text-2xl md:text-3xl transform transition-transform duration-300 hover:scale-110">
                  ✉️
                </div>
                <div className="text-center text-Dark-Primary text-lg md:text-xl font-semibold leading-loose tracking-normal">
                  Email
                </div>
                <div className="w-32 md:w-40 text-center text-Dark-Primary text-xs md:text-sm font-normal tracking-normal truncate">
                  sniffi@gmail.com
                </div>
              </div>
            </div>
            <div className="w-40 h-40 md:w-48 md:h-48 relative bg-red-200 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="w-20 md:w-24 left-1/4 top-1/4 absolute flex flex-col justify-start items-center gap-2">
                <div className="w-10 md:w-12 h-10 md:h-12 relative bg-white rounded-full outline-1 outline-Primary-Red flex justify-center items-center text-2xl md:text-3xl transform transition-transform duration-300 hover:scale-110">
                  💬
                </div>
                <div className="w-28 md:w-32 text-center text-Dark-Primary text-lg md:text-xl font-semibold leading-loose tracking-normal">
                  What’s App
                </div>
                <div className="text-center text-Dark-Primary text-xs md:text-sm font-normal uppercase tracking-normal truncate">
                  987-4556-321
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component7;
