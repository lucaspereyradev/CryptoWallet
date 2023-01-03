import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AsideNavbar from './components/essential-components/AsideNavbar';
import HomePage from './components/pages/HomePage';

function App() {
    return (
        <>
            <BrowserRouter>
                <AsideNavbar />
                <Routes>
                    <Route index element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
