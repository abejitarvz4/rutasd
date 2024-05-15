import React from 'react';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	console.log(state);
	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	}
	const navhola = e => {
		e.preventDefault();
		navigate('/hola', {
			replace: true,
			state: {
				logged: true,
			},
		
		});

		onResetForm();
	};

	const navsoy = e => {
		e.preventDefault();
		navigate('/soy', {
			replace: true,
			state: {
				logged: true,
			},
		
		});

		onResetForm();
	};

	const navhomelo = e => {
		e.preventDefault();
		navigate('/homelo', {
			replace: true,
			state: {
				logged: true,
			},
		
		});

		onResetForm();
	};
	return (
		<>
			<header>
				<h1>
					<Link to='/'>Logo</Link>
				</h1>
				{state?.logged? (
					<div className='user'>
						<span className='username'>{state?.name}</span>	
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>

						<button className='btn-logout' onClick={navhola}>
							hola
						</button>

						<button className='btn-logout' onClick={navsoy}>
							soy
						</button>

						<button className='btn-logout' onClick={navhomelo}>
							homelo
						</button>

					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>

					</nav>
				)}
			</header>
			<Outlet />
		</>
	);
};