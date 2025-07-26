import { SectionTitle } from '@/components/shared';
import React from 'react';
import LoanProductCard from './LoanProductCard';
import { LOANDATA } from '@/static/loanData';

const LoanProduct = () => {
   
    return (
        <div className='container py-20'>
            <SectionTitle title='Loan Products' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20'>
                {LOANDATA.map((loan) => (
                    <LoanProductCard
                        key={loan.id}
                        id={loan.id}
                        image={loan.image}
                        title={loan.title}
                        subtitle={loan.subtitle}
                        features={loan.features}
                    />
                ))}
            </div>
        </div>
    );
};

export default LoanProduct;
