import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Custom function to apply active styles
    const activeStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? '600' : '500',
            color: isActive ? '#FE5F62' : '#3F3D56',
            borderBottom: isActive ? '2px solid #FE5F62' : 'none',
        };
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`sticky top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 py-3 md:py-4 
            ${scrolled ? 'bg-white/95 shadow-md' : 'bg-white/10'} 
            w-full backdrop-blur-sm transition-all duration-300`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-[#FE5F62] rounded-full mr-2 flex-shrink-0" />
                    <div className="flex justify-start">
                        <span className="text-[#3F3D56] text-3xl md:text-4xl font-extrabold leading-7">Sni</span>
                        <span className="text-[#FE5F62] text-3xl md:text-4xl font-extrabold leading-7">ffi</span>
                    </div>
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-center items-center gap-4 lg:gap-8 xl:gap-12 flex-wrap mx-4">
                    <NavLink to="/" style={activeStyle} className="px-1 py-2 text-base lg:text-lg font-medium tracking-tight hover:text-[#FE5F62] transition-colors">
                        HOME
                    </NavLink>
                    <NavLink to='/services' style={activeStyle} className="px-1 py-2 text-base lg:text-lg font-medium tracking-tight hover:text-[#FE5F62] transition-colors">
                        SERVICES
                    </NavLink>
                    <NavLink to="/learning" style={activeStyle} className="px-1 py-2 text-base lg:text-lg font-medium tracking-tight hover:text-[#FE5F62] transition-colors">
                        LEARNING
                    </NavLink>
                    <NavLink to="/social" style={activeStyle} className="px-1 py-2 text-base lg:text-lg font-medium tracking-tight hover:text-[#FE5F62] transition-colors">
                        SOCIAL
                    </NavLink>
                    <NavLink to="tandc" style={activeStyle} className="px-1 py-2 text-base lg:text-lg font-medium tracking-tight hover:text-[#FE5F62] transition-colors">
                        TnC
                    </NavLink>
                </div>

                {/* Book Appointment Button - Always visible */}
                <NavLink 
                    to="/bookappointment"
                    className="hidden md:flex px-5 py-2 lg:px-7 lg:py-2.5 bg-[#FE5F62] hover:bg-[#e45457] rounded-md transition-all duration-300 text-white font-medium tracking-tight shadow-sm hover:shadow-md"
                >
                    Book Appointment
                </NavLink>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-[#3F3D56] p-2 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between items-center">
                        <span className={`bg-[#3F3D56] block transition-all duration-300 ease-out h-0.5 w-full rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`bg-[#3F3D56] block transition-all duration-300 ease-out h-0.5 w-full rounded-sm ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`bg-[#3F3D56] block transition-all duration-300 ease-out h-0.5 w-full rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </div>
            
            {/* Mobile Navigation */}
            <div 
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[320px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="flex flex-col w-full space-y-1 pt-4 pb-4">
                    <NavLink to="/" style={activeStyle} className="w-full py-3 flex items-center justify-center hover:bg-gray-50">
                        <div className="text-lg font-medium text-center">HOME</div>
                    </NavLink>
                    <NavLink to='/services' style={activeStyle} className="w-full py-3 flex items-center justify-center hover:bg-gray-50">
                        <div className="text-lg font-medium text-center">SERVICES</div>
                    </NavLink>
                    <NavLink to="/learning" style={activeStyle} className="w-full py-3 flex items-center justify-center hover:bg-gray-50">
                        <div className="text-lg font-medium text-center">LEARNING</div>
                    </NavLink>
                    <NavLink to="/social" style={activeStyle} className="w-full py-3 flex items-center justify-center hover:bg-gray-50">
                        <div className="text-lg font-medium text-center">SOCIAL</div>
                    </NavLink>
                    <NavLink to="tandc" style={activeStyle} className="w-full py-3 flex items-center justify-center hover:bg-gray-50">
                        <div className="text-lg font-medium text-center">TnC</div>
                    </NavLink>
                    <div className="pt-2 pb-1">
                        <NavLink to="/bookappointment" className="mx-auto block w-[80%] py-2.5 bg-[#FE5F62] hover:bg-[#e45457] text-center rounded-md transition-colors">
                            <div className="text-white text-lg font-medium">Book Appointment</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
