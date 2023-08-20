import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/common/Navigation';
import { Footer } from './components/common/Footer';
import { Home } from './components/Home';

function App() {
	return (
		<>
			<Navigation />
			<div id="container">
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default App;