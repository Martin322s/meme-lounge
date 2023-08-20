import { Routes } from 'react-router-dom';
import { Navigation } from './components/common/Navigation';
import { Footer } from './components/common/Footer';

function App() {
	return (
		<>
			<Navigation />
			<div id="container">
				<main>
					<Routes>

					</Routes>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default App;