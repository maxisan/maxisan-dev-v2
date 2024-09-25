import Image, { ImageProps } from 'next/image';
import React from 'react'
import cn from 'classnames'

interface AvatarProps {
    src: ImageProps['src'];
    alt?: string;
    className?: string;
}

export const Avatar = ({ src, alt = '', className }: AvatarProps) => {
    return (
        <Image src={src} alt={alt} height={300} width={300} className={cn('rounded-full h-28 w-28', className)} />
    )
}
