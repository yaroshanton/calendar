import React, {useMemo} from 'react';
//utils
import dayjs from 'dayjs';
import cx from 'classnames';
//helpers
import {daysOfWeek} from './helpers';
//styles
import styles from './styles.module.scss';

const Month = ({month, events, onEventClick}) => {
	const startOfMonth = dayjs(`2024-${month + 1}-01`);
	const daysInMonth = startOfMonth.daysInMonth();
	const firstDayOfMonth = startOfMonth.day();
	const lastDayOfMonth = startOfMonth.date(daysInMonth).day();

	const prevMonthDays = startOfMonth.subtract(1, 'month').daysInMonth();
	const prevMonthStart = prevMonthDays - firstDayOfMonth + 1;
	const daysFromNextMonth = lastDayOfMonth === 6 ? 0 : 6 - lastDayOfMonth;

	const monthEvents = useMemo(() => {
		return events.filter((event) => dayjs(event.date).month() === month);
	}, [events, month]);

	const getEventsForDay = (day) => {
		return monthEvents.filter((event) => dayjs(event.date).date() === day);
	};

	return (
		<div className={styles.wrapper}>
			<h3>{startOfMonth.format('MMMM')}</h3>

			<div className={styles.days}>
				<div className={styles['days-of-week']}>
					{daysOfWeek.map((day) => (
						<span key={day} className={styles['day-header']}>
							{day}
						</span>
					))}
				</div>

				<div className={styles['days-grid']}>
					{Array.from({length: firstDayOfMonth}, (_, index) => {
						const day = prevMonthStart + index;
						return (
							<div key={`prev-${day}`} className={cx(styles.day, styles['other-month'])}>
								<span>{day}</span>
							</div>
						);
					})}

					{Array.from({length: daysInMonth}, (_, day) => {
						const dayNumber = day + 1;
						const eventsForDay = getEventsForDay(dayNumber);

						return (
							<div
								key={dayNumber}
								className={styles.day}
								style={{cursor: eventsForDay.length ? 'pointer' : 'default'}}
								onClick={() => eventsForDay.length && onEventClick(eventsForDay)}
							>
								<span>{dayNumber}</span>
								{eventsForDay.length > 0 && (
									<div className={styles['event-dots']}>
										{eventsForDay.map((event, index) => (
											<span key={index} className={cx(styles.dot, styles[event.type])}></span>
										))}
									</div>
								)}
							</div>
						);
					})}

					{Array.from({length: daysFromNextMonth}, (_, index) => {
						const day = index + 1;
						return (
							<div key={`next-${day}`} className={cx(styles.day, styles['other-month'])}>
								<span>{day}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default React.memo(Month);
