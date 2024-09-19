import React from 'react'
import { map } from './generated-icons';

export type IconName = keyof typeof map;

interface IconProps {
    name: IconName;
    className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
    const IconComponent = map[name] ?? map['404'];

    return (
        <IconComponent fill='currentColor' height={16} width={16} className={className} />
    )
}
