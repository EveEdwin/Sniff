import React from 'react'
import doctorSvg from '../assets/doctorWithDog.svg'

const Component14 = () => {
    return (
        <div
            style={{ backgroundImage: `url(${doctorSvg})` }}
            className="
                w-full
                aspect-[36/15.67]
                bg-no-repeat
                bg-center
                bg-contain
                flex
                items-start
                justify-start
                "
        >
            <div
                className="
                    mix-blend-exclusion
                    text-justify
                    text-[#3F3D56]
                    font-bold
                    tracking-wide
                    pl-6 pt-6
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    xl:pl-20 xl:pt-20
                    max-w-[90%]
                "
            >
                Your Pet Deserves the <br />Best Care
            </div>
        </div>
    )
}

export default Component14
