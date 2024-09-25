import { Avatar } from '@/components/Avatar'
import React from 'react'

import profilePhoto from '@/assets/images/profile.jpg'
import { FeaturedSection } from './FeaturedText'
import Link from 'next/link'

export const AboutSection = () => {
    const experienceYears = (Date.now() - new Date('2021-05-01').getTime()) / 1000 / 60 / 60 / 24 / 365
    const numberOfCommits = Math.round(experienceYears * 1596).toString()
    return (
        <section className="section flex flex-col items-center p-4 md:col-start-2 md:max-w-xs space-y-2">
            <Avatar src={profilePhoto} alt='avatar' />
            <div>
                <p className='font-bold uppercase tracking-wide leading-5'>Maximiliano Sanchez</p>
                <p className='text-center italic leading-5'>@maxisan</p>
            </div>
            <div className='flex justify-around w-full'>
                <FeaturedSection heading='Experience' description={`${experienceYears.toLocaleString(undefined, { maximumSignificantDigits: 2 })} years`} />
                <FeaturedSection heading='Commits' description={numberOfCommits.toString()} />
                <FeaturedSection heading='Techs' description='9' />
            </div>
            <Link href='/about' className='underline hover:no-underline'>Know me more</Link>
        </section>
    )
}
