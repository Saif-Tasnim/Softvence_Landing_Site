interface NAVITEMS {
    id: number;
    title: string;
    path: string;
}

export const NAV: NAVITEMS[] = [
    {
        id: 1,
        title: 'Fix and Flip',
        path: '/'
    },
    {
        id: 2,
        title: 'Rental Loans',
        path: '/loans'
    },
    {
        id: 3,
        title: 'Where We Lend',
        path: '/lend'
    },
    {
        id: 4,
        title: 'About Us',
        path: '/about'
    },
    {
        id: 5,
        title: 'Resources',
        path: '/resources'
    }
];
