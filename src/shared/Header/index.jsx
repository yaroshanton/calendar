import React from 'react';
import {NavLink} from 'react-router-dom';
//assets
import logo from 'assets/images/logo.svg';
//utils
import {ROUTER_URL} from 'utils/router-url';
//styles
import styles from './styles.module.scss';

const Header = () => {
	return (
		<div className={styles.wrapper}>
			<img src={logo} alt="logo" />

			<ul className={styles.navigation}>
				<li className={styles.navigationItem}>
					<NavLink to={ROUTER_URL.MAIN} className={({isActive}) => isActive && styles.activeLink}>
						Main
					</NavLink>
				</li>
				<li className={styles.navigationItem}>
					<NavLink to={ROUTER_URL.EVENTS} className={({isActive}) => isActive && styles.activeLink}>
						Events
					</NavLink>
				</li>
				<li className={styles.navigationItem}>
					<NavLink to={ROUTER_URL.CALENDAR} className={({isActive}) => isActive && styles.activeLink}>
						Calendar
					</NavLink>
				</li>
				<li className={styles.navigationItem}>
					<NavLink to={ROUTER_URL.FAQ} className={({isActive}) => isActive && styles.activeLink}>
						FAQ
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Header;
