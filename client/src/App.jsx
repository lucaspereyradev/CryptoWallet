import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AsideNavbar from './components/essential-components/AsideNavbar';
import CoinsPage from './components/pages/CoinsPage';
import HomePage from './components/pages/HomePage';

function App() {
    return (
        <>
            <BrowserRouter>
                <AsideNavbar />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/coins" element={<CoinsPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
