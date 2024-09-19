import { Route } from "next";
import { IconName } from "../Icon";

interface MenuItem {
    label: string;
    href: Route;
    icon: IconName;
}

export const menuItems: MenuItem[] = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'About', href: '/about', icon: 'circleUser' },
    { label: 'Projects', href: '/projects', icon: 'folderOpen' },
    { label: 'Contact', href: '/contact', icon: 'envelope' },
]