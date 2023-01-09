import React from 'react';
import Header from '../essential-components/Header';
import WalletContent from '../wallet-components/WalletContent';
import AppWrap from '../Wrapper/AppWrap';

const WalletPage = () => {
    return (
        <>
            <Header title="Wallet" />
            <WalletContent />
        </>
    );
};

export default AppWrap(WalletPage);
