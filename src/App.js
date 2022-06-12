import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashbord';

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="dashboard" element={<Dashboard />} />
				{/* <Navigate from="*" to="/" /> */}
			</Routes>
		</div>
	);
};

export default App;
