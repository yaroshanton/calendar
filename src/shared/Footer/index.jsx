import React from 'react';
import {NavLink} from 'react-router-dom';
//assets
import logo from 'assets/images/logo.svg';
//utils
import {ROUTER_URL} from 'utils/router-url';
import dayjs from 'dayjs';
//styles
import styles from './styles.module.scss';

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<NavLink to={ROUTER_URL.CALENDAR} className={styles.logo}>
				<img src={logo} alt="logo" />
			</NavLink>

			<ul className={styles.navigation}>
				<li className={styles['navigation-item']}>
					<NavLink to={ROUTER_URL.MAIN}>Main</NavLink>
				</li>
				<li className={styles['navigation-item']}>
					<NavLink to={ROUTER_URL.EVENTS}>Events</NavLink>
				</li>
				<li className={styles['navigation-item']}>
					<NavLink to={ROUTER_URL.CALENDAR}>Calendar</NavLink>
				</li>
				<li className={styles['navigation-item']}>
					<NavLink to={ROUTER_URL.FAQ}>FAQ</NavLink>
				</li>
			</ul>

			<p className={styles.rights}>© {dayjs().format('YYYY')} All rights reserved</p>
		</div>
	);
};

export default Footer;
