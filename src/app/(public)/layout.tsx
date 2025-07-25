import { Footer, TheHeader } from '@/components/shared';
import React from 'react';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <TheHeader />
            {children}
            <Footer />
        </main>
    );
};

export default PublicLayout;
