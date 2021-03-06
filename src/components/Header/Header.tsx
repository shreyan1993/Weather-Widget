import React from 'react';
import { Link } from 'react-router-dom';
import Routes from 'Routes';
import Logo from 'assets/logo.png';
import styles from './Header.styles';

const Header: React.FC = () => (
	<header css={styles}>
		<Link className="logo" to={Routes.Home.path}>
			<img src={Logo} alt="React App" />
             React Weather Widget Using Hooks
		</Link>
	</header>
);

export default Header;
