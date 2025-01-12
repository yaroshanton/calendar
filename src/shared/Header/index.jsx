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
			<NavLink to={ROUTER_URL.CALENDAR}>
				<img src={logo} alt="logo" />
			</NavLink>

			<ul className={styles.navigation}>
				<li className={styles['navigation-item']}>
					<NavLink to={ROUTER_URL.MAIN} className={({isActive}) => isActive && styles['active-link']}>
						Main
					</NavLink>
				</li>
				<li className={styles['navigation-item']}>
					<NavLink to={ROUTER_URL.EVENTS} className={({isActive}) => isActive && styles['active-link']}>
						Events
					</NavLink>
				</li>
				<li className={styles['navigation-item']}>
					<NavLink to={ROUTER_URL.CALENDAR} className={({isActive}) => isActive && styles['active-link']}>
						Calendar
					</NavLink>
				</li>
				<li className={styles['navigation-item']}>
					<NavLink to={ROUTER_URL.FAQ} className={({isActive}) => isActive && styles['active-link']}>
						FAQ
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Header;
