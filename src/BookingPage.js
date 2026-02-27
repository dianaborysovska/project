import React from 'react';
import BookingForm from './BookingForm';

function BookingPage(props) {
    return (
        <div style={{ padding: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Reserve a Table</h1>
            <BookingForm
                availableTimes={props.availableTimes}
                dispatch={props.dispatch}
                submitForm={props.submitForm}
            />
        </div>
    );
}

export default BookingPage;