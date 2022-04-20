import React from 'react';
import AdminConnectionFormulaire from '../component/AdminConnectionFormulaire';
import HomeNavigation from '../component/HomeNavigation';

const ConnectionPage = () => {
    return (
        <>
            <header className="homePageHeader">
                <HomeNavigation urlValue='connection' />
            </header>
            <main className="connectionPage" >
                <AdminConnectionFormulaire />
            </main>
        </>
    );
};

export default ConnectionPage;