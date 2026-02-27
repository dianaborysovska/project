import React, { useState } from "react";
import './App.css';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const today = new Date().toISOString().split('T')[0];

    const getIsFormValid = () => {
        return (
            date &&
            time &&
            guests >= 1 &&
            guests <= 10 &&
            occasion
        );
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({ date, time, guests, occasion });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                min={today}
                required
                aria-label="Select reservation date"
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                aria-label="Select reservation time"
            >
                <option value="">Select a time</option>
                {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
                aria-label="Number of guests"
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                aria-label="Select occasion"
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input
                type="submit"
                value="Make Your reservation"
                aria-label="On Click"
                disabled={!getIsFormValid()}
            />
        </form>
    );
};

export default BookingForm;