import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/common/Navigation';
import { Footer } from './components/common/Footer';
import { Home } from './components/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalog } from './components/Catalog';
import { Create } from './components/Create';
import { Edit } from './components/Edit';
import { Profile } from './components/Profile';
import { Details } from './components/Details';
import { AuthContextProvider } from './contexts/AuthContext';
import { Logout } from './components/Logout';

function App() {
	return (
		<AuthContextProvider>
			<Navigation />
			<div id="container">
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/catalog" element={<Catalog />} />
						<Route path="/create-meme" element={<Create />} />
						<Route path="/details/:memeId" element={<Details />} />
						<Route path="/edit" element={<Edit />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/logout" element={<Logout />} />
					</Routes>
				</main>
			</div>
			<Footer />
		</AuthContextProvider>
	);
}

export default App;