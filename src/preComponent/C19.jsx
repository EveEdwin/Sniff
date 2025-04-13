import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Component16 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Custom function to apply active styles
    const activeStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#FE5F62' : '#3F3D56', // Using your app's accent color
            borderBottom: isActive ? '2px solid #FE5F62' : 'none',
        };
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="px-4 md:px-8 lg:px-12 py-4 bg-white/10 w-full rounded-[5px] backdrop-blur-[2px] flex flex-col md:flex-row md:inline-flex justify-between md:justify-center mb-10 items-center md:gap-8 lg:gap-28">
            {/* Logo */}
            <div className="w-32 h-9 relative flex items-center">
                <div className="w-7 h-7 bg-[#FE5F62] rounded-full mr-2" />
                <div className="flex justify-start">
                    <span className="text-[#3F3D56] text-4xl font-extrabold leading-7">Sni</span>
                    <span className="text-[#FE5F62] text-4xl font-extrabold leading-7">ffi</span>
                </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
                className="md:hidden self-end text-[#3F3D56] p-2 -mt-8"
                onClick={toggleMenu}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-start items-center gap-4 lg:gap-[90px] flex-wrap">
                <NavLink to="/" style={activeStyle} data-state="Default" className="w-[60px] h-6 flex items-center">
                    <div className="text-xl font-medium tracking-tight">HOME</div>
                </NavLink>
                <NavLink to='/services' style={activeStyle} data-state="Default" className="w-[90px] h-6 flex items-center">
                    <div className="text-xl font-medium tracking-tight">SERVICES</div>
                </NavLink>
                <NavLink to="/learning" style={activeStyle} data-state="Default" className="w-[100px] h-6 flex items-center">
                    <div className="text-xl font-medium tracking-tight">LEARNING</div>
                </NavLink>
                <NavLink to="/social" style={activeStyle} data-state="Default" className="w-[70px] h-6 flex items-center">
                    <div className="text-xl font-medium tracking-tight">SOCIAL</div>
                </NavLink>
                <NavLink to="tandc" style={activeStyle} data-state="Default" className="w-[35px] h-6 flex items-center">
                    <div className="text-xl font-medium tracking-tight">TnC</div>
                </NavLink>
                <NavLink to="/bookappointment" style={activeStyle} className="px-7 py-2.5 bg-[#FE5F62] rounded flex justify-center items-center">
                    <div className="text-[#FFFFFF] text-xl font-medium tracking-tight">Book Appointment</div>
                </NavLink>
            </div>
            
            {/* Mobile Navigation */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col w-full mt-4 space-y-4 pb-4`}>
                <NavLink to="/" style={activeStyle} data-state="Default" className="w-full h-10 flex items-center justify-center">
                    <div className="text-xl font-medium text-center">HOME</div>
                </NavLink>
                <NavLink to='/services' style={activeStyle} data-state="Default" className="w-full h-10 flex items-center justify-center">
                    <div className="text-xl font-medium text-center">SERVICES</div>
                </NavLink>
                <NavLink to="/learning" style={activeStyle} data-state="Default" className="w-full h-10 flex items-center justify-center">
                    <div className="text-xl font-medium text-center">LEARNING</div>
                </NavLink>
                <NavLink to="/social" style={activeStyle} data-state="Default" className="w-full h-10 flex items-center justify-center">
                    <div className="text-xl font-medium text-center">SOCIAL</div>
                </NavLink>
                <NavLink to="tandc" style={activeStyle} data-state="Default" className="w-full h-10 flex items-center justify-center">
                    <div className="text-xl font-medium text-center">TnC</div>
                </NavLink>
                <NavLink to="/bookappointment" style={activeStyle} className="px-7 py-2.5 bg-[#FE5F62] rounded mx-auto">
                    <div className="text-[#FFFFFF] text-xl font-medium text-center">Book Appointment</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Component16
