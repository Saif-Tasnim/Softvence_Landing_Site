interface IProjects {
    id: number;
    title: string;
    address: string;
    image: string;
    feet: number;
    bed: number;
    garages: number;
    bath: number;
    loan: string;
    rate: number;
    LTV: number;
    term: number;
    price: string;
}

export const PROJECTS: IProjects[] = [
    {
        id: 1,
        title: '4321 Alton Rd, Miami Beach',
        address: 'Miami, Florida',
        image: '/pics.png',
        feet: 2350,
        bed: 2,
        garages: 4,
        bath: 3,
        loan: '328,000',
        rate: 11.75,
        LTV: 84.65,
        term: 12,
        price: '3,45,000'
    },
    {
        id: 2,
        title: 'AMLI 7th Street Station',
        address: 'Houston, Texas',
        image: '/pics.png',
        feet: 2350,
        bed: 2,
        garages: 4,
        bath: 3,
        loan: '328,000',
        rate: 11.75,
        LTV: 84.65,
        term: 12,
        price: '3,45,000'
    },
    {
        id: 3,
        title: '201 South Orange Avenue',
        address: 'Orlando, Florida',
        image: '/pics.png',
        feet: 2350,
        bed: 2,
        garages: 4,
        bath: 3,
        loan: '328,000',
        rate: 11.75,
        LTV: 84.65,
        term: 12,
        price: '3,45,000'
    }
];
