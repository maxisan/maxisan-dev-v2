import React from 'react'

interface FeaturedSectionProps {
    heading: string;
    description: string;
}

export const FeaturedSection = ({ heading, description }: FeaturedSectionProps) => {
    return (
        <div className='text-center'>
            <p>{heading}</p>
            <p className="text-accent font-semibold uppercase">{description}</p>
        </div>
    )
}
