import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import DashboardPage from '../views/DashboardPage/DashboardPage';
import InvoiceLibraryPage from '../views/InvoiceLibraryPage/InvoiceLibraryPage';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/invoice-library" element={<InvoiceLibraryPage />} />
            </Routes>
        </>


    )
}

export default Routers;