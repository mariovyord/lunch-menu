import { skipToken } from "@reduxjs/toolkit/dist/query";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import { useGetCartQuery } from "./features/api/api";
import ContactsPage from "./features/contactsPage/ContactsPage";
import Footer from "./features/footer/Footer";
import HomePage from "./features/homePage/HomePage";
import NavigationBar from "./features/navigationBar/NavigationBar";
import { selectUser } from "./features/user/userSlice";

function App() {
    const user = useAppSelector(selectUser).user;
    useGetCartQuery(user?._id ?? skipToken);

    return (
        <div className="min-h-screen flex flex-col bg-slate-200">
            <NavigationBar />
            <main className="max-w-7xl mx-auto grow w-full bg-white">
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/contacts' element={<ContactsPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
