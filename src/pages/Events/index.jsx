import React from 'react';
//components
import Layout from 'shared/Layout';
//styles
import styles from './styles.module.scss';

const Events = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<div className={styles.title}>Events</div>
			</div>
		</Layout>
	);
};

export default Events;
