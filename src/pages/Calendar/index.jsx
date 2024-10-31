import React, {useState, useEffect, useRef, useCallback} from 'react';
//utils
import cx from 'classnames';
//components
import Month from './components/Month';
import EventPopup from './components/EventPopup';
import EventFilters from './components/EventFilter';
//shared
import Layout from 'shared/Layout';
//helpers
import {mockEvents, NUM_MONTHS} from './helpers';
//styles
import styles from './styles.module.scss';

const Calendar = () => {
	const [selectedEvents, setSelectedEvents] = useState([]);
	const [selectedFilters, setSelectedFilters] = useState([]);
	const popupRef = useRef(null);

	const closeEventPopup = () => setSelectedEvents([]);

	const handleClickOutside = (event) => {
		if (popupRef.current && !popupRef.current.contains(event.target)) {
			closeEventPopup();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleEventClick = (events) => setSelectedEvents(events);

	const handleFilterChange = useCallback((type) => {
		setSelectedFilters((prevFilters) =>
			prevFilters.includes(type) ? prevFilters.filter((filter) => filter !== type) : [...prevFilters, type]
		);
	}, []);

	const filterEvents = () => {
		if (selectedFilters.length === 0) return mockEvents;
		return mockEvents.filter((event) => selectedFilters.includes(event.type));
	};

	const filteredEvents = filterEvents();

	const getMonthIndex = (offset) => {
		const currentMonth = new Date().getMonth();
		return (currentMonth + offset) % 12;
	};

	return (
		<Layout>
			<div className={cx(styles.wrapper, {[styles['popup-open']]: selectedEvents.length > 0})}>
				<div className={styles.title}>Calendar</div>

				<EventFilters selectedFilters={selectedFilters} onFilterChange={handleFilterChange} />

				<div className={styles.months}>
					{Array.from({length: NUM_MONTHS}, (_, index) => (
						<Month key={index} month={getMonthIndex(index)} events={filteredEvents} onEventClick={handleEventClick} />
					))}
				</div>

				{selectedEvents.length > 0 && (
					<div ref={popupRef}>
						<EventPopup events={selectedEvents} />
					</div>
				)}
			</div>
		</Layout>
	);
};

export default Calendar;
