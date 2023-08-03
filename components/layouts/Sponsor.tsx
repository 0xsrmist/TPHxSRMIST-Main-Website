import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import sponsorImg from "/public/assets/images/sponsor.png"

export default function Sponsor(){
    return(
        <div className="">
            <Image src={sponsorImg} alt="sponsors" className=" h-[149px] w-[100%] md:h-auto md:mb-12"/>
        </div>
    )
} 