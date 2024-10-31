import React from 'react';
//utils
import cx from 'classnames';
import dayjs from 'dayjs';
//helpers
import {eventTypeTexts} from 'pages/Calendar/helpers';
//assets
import editIcon from 'assets/icons/edit.svg';
//styles
import styles from './styles.module.scss';

const EventPopup = ({events}) => {
	const handleEditClick = (event) => alert(`Edit Event: ${event.title}`);

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Events</div>

			{events.map((event) => (
				<div key={event.id} className={styles['event-details']}>
					<div className={styles.description}>
						<div>
							<h3>{event.title}</h3>
							<img src={editIcon} alt="Edit" onClick={() => handleEditClick(event)} />
						</div>
						<p>{event.description}</p>
					</div>

					<p className={styles.location}>{event.location}</p>

					<div className={styles.info}>
						<p className={styles.time}>{dayjs(`${event.date} ${event.time}`).format('D MMMM, HH:mm')}</p>
						<p className={cx(styles.type, styles[event.type])}>{eventTypeTexts[event.type]}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default React.memo(EventPopup);
