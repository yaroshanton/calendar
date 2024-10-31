import React from 'react';
//components
import Layout from 'shared/Layout';
//styles
import styles from './styles.module.scss';

const FAQ = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<div className={styles.title}>FAQ</div>
			</div>
		</Layout>
	);
};

export default FAQ;
