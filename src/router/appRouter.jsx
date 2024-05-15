import {Navigate, Route, Routes} from 'react-router-dom';
import {Navbar} from '../navBar';
import {HomePage, DashPage, LoginPage, RegisterPage, HolaPage, HomeloChino, SoyHomelo} from '../pages';
import {PrivateRoute} from './privRout';

export const AppRouter = () => {

	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashPage />
							</PrivateRoute>
						}
					/>	

					<Route
						path='hola'
						element={
							<PrivateRoute>
								<HolaPage />
							</PrivateRoute>
						}
					/>

					<Route
						path='homelo'
						element={
							<PrivateRoute>
								<HomeloChino />
							</PrivateRoute>
						}
					/>

					<Route
						path='soy'
						element={
							<PrivateRoute>
								<SoyHomelo />
							</PrivateRoute>
						}
					/>								
				</Route>
			</Routes>
		</>
	);
};