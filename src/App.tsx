import { Route, Routes } from "react-router-dom";
import ContactsPage from "./features/contactsPage/ContactsPage";
import Footer from "./features/footer/Footer";
import HomePage from "./features/homePage/HomePage";
import NavigationBar from "./features/navigationBar/NavigationBar";

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<NavigationBar />
			<main className="max-w-7xl mx-auto px-3 grow w-full">
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
