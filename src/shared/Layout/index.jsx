import React from 'react';
//components
import Header from 'shared/Header';
import Footer from 'shared/Footer';
//styles
import styles from './styles.module.scss';

const Layout = ({children}) => {
	return (
		<div className={styles.wrapper}>
			<Header />

			{children}

			<Footer />
		</div>
	);
};

export default Layout;
