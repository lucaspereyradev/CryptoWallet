import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AsideNavbar } from './components';
import { CoinsPage, HomePage, LoginPage, RegisterPage, WalletPage } from './pages/';

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
