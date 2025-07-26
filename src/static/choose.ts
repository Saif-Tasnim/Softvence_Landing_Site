interface Choose {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export const CHOOSE: Choose[] = [
    {
        id: 1,
        title: 'Simple Online Application',
        description:
            'Easy 2 minute online application, with no credit pull required.',
        icon: '/house.png'
    },
    {
        id: 2,
        title: 'Quick Turn Around',
        description: 'Receive a Term Sheet within the hour.',
        icon: '/time.png'
    },
    {
        id: 3,
        title: 'Reliable Financing',
        description:
            'Integrity and honesty are the foundations of our business. When we commit to a loan, we make sure you close on time.',
        icon: '/reli.png'
    }
];
