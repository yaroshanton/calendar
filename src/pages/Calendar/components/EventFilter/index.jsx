import React from 'react';
//utils
import cx from 'classnames';
//helpers
import {filterTypes} from './helpers';
import {eventTypeTexts} from 'pages/Calendar/helpers';
//styles
import styles from './styles.module.scss';

const EventFilters = ({selectedFilters, onFilterChange}) => {
	const handleFilterClick = (type) => onFilterChange(type);

	return (
		<div className={styles.wrapper}>
			{filterTypes.map((type) => (
				<button
					key={type}
					onClick={() => handleFilterClick(type)}
					className={cx(styles[type], {[styles.active]: selectedFilters.includes(type)})}
				>
					{eventTypeTexts[type]}
				</button>
			))}
		</div>
	);
};

export default React.memo(EventFilters);
