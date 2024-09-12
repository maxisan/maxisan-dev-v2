import React from 'react'
import Image from "next/image";
import homeBackground from "@/assets/images/valhalla.jpg";

export const MainBackground = () => {
    return (
        <div className='isolate absolute top-0 left-0 -z-50 w-full h-full blur-sm'>
            <div className='absolute w-full h-full bg-black opacity-50' />
            <Image src={homeBackground} alt='' width={1080} height={1080} className='w-full h-full object-cover' />
        </div>
    )
}
