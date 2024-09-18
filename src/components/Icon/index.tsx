import React from 'react'
import { map } from './generated-icons';

interface IconProps {
    name: keyof typeof map;
    className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
    const IconComponent = map[name] ?? map['404'];

    return (
        <IconComponent fill='currentColor' height={16} width={16} className={className} />
    )
}
