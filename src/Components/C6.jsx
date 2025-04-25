const Component8 = () => {
    return (
        <>
            <div className="w-full h-auto bg-[#3F3D56] overflow-hidden p-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pl-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-6 h-6 bg-[#FE5F62] rounded-full"></div>
                        <div className="text-4xl font-extrabold leading-normal hover:text-[#FE5F62] transition-colors cursor-pointer">
                            <span className="text-white">Sni</span>
                            <span className="text-[#FE5F62]">ffi</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-start pl-4">
                    {/* Description Section */}
                    <div className="text-white text-base font-normal leading-relaxed max-w-md text-left hover:shadow-lg transition-shadow cursor-pointer">
                        <p>
                            At Sniffi, we are dedicated to providing top-notch veterinary care with love and compassion. 
                            From routine check-ups to emergency treatments, we ensure your furry companions get the 
                            best care possible.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-white text-base font-medium leading-relaxed hover:shadow-lg hover:text-[#FE5F62] transition-shadow transition-colors cursor-pointer">
                            QUICK LINKS
                        </h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-white text-base font-medium leading-relaxed hover:text-[#FE5F62] transition-colors cursor-pointer">Home</li>
                            <li className="text-white text-base font-medium leading-relaxed hover:text-[#FE5F62] transition-colors cursor-pointer">Services</li>
                            <li className="text-white text-base font-medium leading-relaxed hover:text-[#FE5F62] transition-colors cursor-pointer">Learning</li>
                            <li className="text-white text-base font-medium leading-relaxed hover:text-[#FE5F62] transition-colors cursor-pointer">Socials</li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-white text-base font-medium  uppercase leading-relaxed hover:shadow-lg hover:text-[#FE5F62] transition-shadow transition-colors cursor-pointer">
                            Follow us
                        </h3>
                        <div className="flex space-x-5 mt-4">
                            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-[#FE5F62] hover:shadow-lg transition-colors transition-shadow" data-platform="Facebook">
                                <img src="https://i.pinimg.com/736x/5b/b0/f7/5bb0f73a7b3e0f976acad614a42e5040.jpg" alt="Facebook" className="w-4 h-4" />
                            </div>
                            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-[#FE5F62] hover:shadow-lg transition-colors transition-shadow" data-platform="X (Twitter)">
                                <img src="https://i.pinimg.com/736x/c8/d3/d4/c8d3d4d12a8ea35b58e35de9ec820a22.jpg" alt="Twitter" className="w-4 h-4" />
                            </div>
                            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-[#FE5F62] hover:shadow-lg transition-colors transition-shadow" data-platform="YouTube">
                                <img src="https://i.pinimg.com/736x/9a/59/81/9a59817eac70327b226ee3fe81f200c5.jpg" alt="YouTube" className="w-4 h-4" />
                            </div>
                            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-[#FE5F62] hover:shadow-lg transition-colors transition-shadow" data-platform="LinkedIn">
                                <img src="https://i.pinimg.com/474x/fd/fa/dd/fdfadd56cb3ea0ae5ad45cb3fabc0e18.jpg" alt="LinkedIn" className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="border-t border-white mt-6"></div>
                <p className="mt-4 text-white text-base font-medium  leading-relaxed text-center">
                    © 2025 Sniffi. All rights reserved. | 
                    <span className="hover:text-[#FE5F62] cursor-pointer"> Privacy Policy </span>| 
                    <span className="hover:text-[#FE5F62] cursor-pointer"> Terms & Conditions </span>| 
                    <span className="hover:text-[#FE5F62] cursor-pointer"> Sitemap </span>
                </p>
            </div>
        </>
    );
}

export default Component8;