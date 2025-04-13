import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Component16 = () => {

    // Custom function to apply active styles
    const activeStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#FE5F62' : '#3F3D56', // Using your app's accent color
            borderBottom: isActive ? '2px solid #FE5F62' : 'none',
        };
    };

    return (
        <div className="px-12 py-4 bg-white/10 w-full rounded-[5px] backdrop-blur-[2px] inline-flex justify-center mb-10 items-center gap-28">
            <div className="w-32 h-9 relative">
                <div className="w-7 h-7 left-0 top-[4.69px] absolute bg-[#FE5F62] rounded-full" />
                <div className="w-24 h-7 left-[36.34px] top-[4.10px] absolute justify-start">
                    <span className="text-[#3F3D56] text-4xl font-extrabold font-['Inter'] leading-7">Sni</span>
                    <span className="text-[#FE5F62] text-4xl font-extrabold font-['Inter'] leading-7">ffi</span>
                </div>
            </div>
            <div className="flex justify-start items-center gap-[90px]">
                <NavLink to="/" style={activeStyle} data-state="Default" className={` w-[60px] h-6 relative  `}>
                    <div className="left-0 top-0 absolute justify-center flex items-center text-xl font-medium font-['Inter'] tracking-tight">HOME</div>
                </NavLink>
                <NavLink to='/services' style={activeStyle} data-state="Default" className="w-[90px] h-6 relative">
                    <div className="left-0 top-0 absolute justify-start  text-xl font-medium font-['Inter'] tracking-tight">SERVICES</div>
                </NavLink>
                <NavLink to="/learning" style={activeStyle} data-state="Default" className="w-[100px] h-6 relative">
                    <div className="left-0 top-0 absolute justify-start  text-xl font-medium font-['Inter'] tracking-tight">LEARNING</div>
                </NavLink>
                <NavLink to="/social" style={activeStyle} data-state="Default" className="w-[70px] h-6 relative">
                    <div className="left-0 top-0 absolute justify-start  text-xl font-medium font-['Inter'] tracking-tight">SOCIAL</div>
                </NavLink>
                <NavLink to="tandc" style={activeStyle} data-state="Default" className="w-[35px] h-6 relative">
                    <div className="left-0 top-0 absolute justify-start  text-xl font-medium font-['Inter'] tracking-tight">TnC</div>
                </NavLink>
                <NavLink to="/bookappointment" style={activeStyle} className="px-7 py-2.5 bg-[#FE5F62] rounded flex justify-center items-center gap-6">
                    <div className="justify-start text-[#FFFFFF] text-xl font-medium font-['Inter'] tracking-tight">Book Appointment</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Component16
