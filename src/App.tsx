import Footer from "./features/footer/Footer";
import NavigationBar from "./features/navigationBar/NavigationBar";

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<NavigationBar />
			<main className="max-w-5xl mx-auto">Hello World</main>
			<Footer />
		</div>
	);
}

export default App;
