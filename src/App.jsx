import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//utils
import {ROUTER_URL} from 'utils/router-url';
//pages
const MainPage = lazy(() => import('./pages/Main'));
const EventsPage = lazy(() => import('./pages/Events'));
const CalendarPage = lazy(() => import('./pages/Calendar'));
const FAQPage = lazy(() => import('./pages/FAQ'));

const App = () => {
	return (
		<div className="App">
			<Suspense fallback={<div>loader here</div>}>
				<BrowserRouter>
					<Routes>
						<Route path={ROUTER_URL.MAIN} element={<MainPage />} />
						<Route path={ROUTER_URL.EVENTS} element={<EventsPage />} />
						<Route path={ROUTER_URL.CALENDAR} element={<CalendarPage />} />
						<Route path={ROUTER_URL.FAQ} element={<FAQPage />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</div>
	);
};

export default App;
