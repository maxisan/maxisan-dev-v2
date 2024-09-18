interface MenuItem {
    label: string;
    href: string;
    icon: string;
}

export const menuItems: MenuItem[] = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'About', href: '/about', icon: 'info' },
    { label: 'Projects', href: '/projects', icon: 'folder' },
    { label: 'Contact', href: '/contact', icon: 'mail' },
]