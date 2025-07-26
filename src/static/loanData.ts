interface LoanData {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    features: {
        id: number;
        list: string;
    }[];
}

export const LOANDATA: LoanData[] = [
    {
        id: 1,
        image: '/fix_flip.png',
        title: 'Fix and Flip',
        subtitle: 'Funding For Rehab + Purchase',
        features: [
            { id: 1, list: '$50,000 up to $3,000,000' },
            { id: 2, list: 'Interest Rate 10.5%-12.99%' },
            { id: 3, list: 'Origination Fee From 1.5%' },
            { id: 4, list: 'Up to 85% of Purchase and 100% of Rehab' }
        ]
    },
    {
        id: 2,
        image: '/rent.png',
        title: 'Rental Property',
        subtitle: '30 Year DSCR loans in Florida and Texas',
        features: [
            { id: 1, list: 'Up to $1,500,000' },
            { id: 2, list: 'Interest Rate 6.75%-8.25%' },
            { id: 3, list: 'Origination Fee From 1.5%' },
            { id: 4, list: 'Up to 85% of LTV' }
        ]
    },
    {
        id: 3,
        image: '/construct.png',
        title: 'Ground Up Construction',
        subtitle: 'Ground Up Construction loans in Florida and Texas',
        features: [
            { id: 1, list: 'Up to $3,500,000' },
            { id: 2, list: 'Interest Rate 11.25%-13.25%' },
            { id: 3, list: 'Origination Fee From 1.5%' },
            { id: 4, list: 'Up to 80% of LTC' }
        ]
    }
];
