import React from 'react'
import { Icon } from '@/components/Icon'
import { menuItems } from './constants'
import Link from 'next/link'
import { NavigationIcon } from './NavigationIcon'

export const NavigationMenu = () => {
    return (
        <nav className='flex items-center bg-darkBlue w-full h-full text-white rounded-xl'>
            <ul className='flex justify-between items-center w-full h-full md:justify-normal max-w-sm mx-auto md:flex-col md:gap-4 md:py-8'>
                {
                    menuItems.map((item, index) => (
                        <li key={index} className='flex items-center h-full md:h-auto'>
                            <Link href={item.href}>
                                <NavigationIcon path={item.href}>
                                    <Icon name={item.icon} className='w-6 h-6' />
                                </NavigationIcon>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
