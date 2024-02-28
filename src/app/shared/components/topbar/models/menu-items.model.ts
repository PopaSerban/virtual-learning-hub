import { MenuItem } from "primeng/api";

export const menuItems: MenuItem[] = [
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
    },
    {
        label: 'About',
        icon: 'pi pi-info-circle',
        routerLink: '/about'
    },
    {
        label: 'Courses',
        icon: 'pi pi-fw pi-book',
        routerLink: '/courses'
    },
    {
        label: 'Contact',
        icon: 'pi pi-fw pi-envelope',
        routerLink: '/contact'
    }
]