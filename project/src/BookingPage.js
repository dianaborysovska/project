import BookingForm from './BookingForm';

function BookingPage() {
    return (
        <div style={{ padding: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Reserve a Table</h1>
            <BookingForm />
        </div>
    );
}

export default BookingPage;