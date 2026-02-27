import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());
    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) result.push(i + ':00');
        if(random() < 0.5) result.push(i + ':30');
    }
    return result;
};

export const submitAPI = function(formData) {
    return true;
};

export const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        return fetchAPI(new Date(action.payload));
    }
    return state;
};

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    };

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
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}

export default Main;