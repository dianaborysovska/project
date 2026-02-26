import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import BookingPage from './BookingPage';

export const updateTimes = (state, action) => {
    return initializeTimes();
};

export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <main>
            <Routes>
                <Route path="/" element={
                    <>
                        <CallToAction />
                        <Specials />
                        <CustomersSay />
                        <Chicago />
                    </>
                } />
                <Route
                    path="/booking"
                    element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
                />
            </Routes>
        </main>
    );
}

export default Main;