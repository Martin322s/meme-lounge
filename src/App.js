import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/common/Navigation';
import { Footer } from './components/common/Footer';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Catalog } from './components/Catalog';
import { Create } from './components/Create';

function App() {
	return (
		<>
			<Navigation />
			<div id="container">
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/catalog" element={<Catalog />} />
						<Route path="/create-meme" element={<Create />} />
					</Routes>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default App;