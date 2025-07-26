import React from 'react';
import {
    Banner,
    ChooseUs,
    LoanProduct,
    PastProjects,
    WhereWeLend,
    WorkingWithUs
} from './component';

const HomePage = () => {
    return (
        <>
            <Banner />
            <LoanProduct />
            <WhereWeLend />
            <ChooseUs />
            <PastProjects />
            <WorkingWithUs />
        </>
    );
};

export default HomePage;
