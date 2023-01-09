import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AsideNavbar from './components/essential-components/AsideNavbar';
import CoinsPage from './components/pages/CoinsPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import WalletPage from './components/pages/WalletPage';

import { createContext, useEffect, useState } from 'react';

export const User = createContext();

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedInApp');
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setUser(user.user);
        }
    }, []);

    return (
        <>
            <User.Provider value={user}>
                <BrowserRouter>
                    <AsideNavbar />
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/coins" element={<CoinsPage />} />
                        <Route path="/wallet" element={<WalletPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </BrowserRouter>
            </User.Provider>
        </>
    );
}

export default App;
