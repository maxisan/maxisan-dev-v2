'use client'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import cn from 'classnames'
import { usePathname } from 'next/navigation';

export const NavigationIcon = ({ children, path }: PropsWithChildren<{ path: string }>) => {
    const [isActive, setActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (path === '/') {
            setActive(path === pathname);
            return;
        }
        setActive(pathname.startsWith(path));
    }, [pathname, path]);

    return <div className={cn('h-full p-4 border-accent transition-all duration-100', { 'text-accent border-b-4 md:border-b-0 md:border-l-4': isActive })}>{children}</div>;
}
