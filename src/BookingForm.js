import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        props.dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation submitted!");
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        >
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                aria-label="Select reservation date"
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                aria-label="Select reservation time"
                required
            >
                {props.availableTimes.map(time => (
                    <option key={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                aria-label="Number of guests"
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                aria-label="Select occasion"
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input
                type="submit"
                value="Make Your reservation"
                aria-label="On click confirm your reservation"
                disabled={!date}
            />
        </form>
    );
};

export default BookingForm;