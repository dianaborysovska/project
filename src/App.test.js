import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns correct values', () => {
    const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes()).toEqual(expectedValue);
});

test('updateTimes returns correct values', () => {
    const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(updateTimes([], {type: 'UPDATE_TIMES'})).toEqual(expectedValue);
});

test('BookingForm has correct HTML5 validation attributes', () => {
    render(<BookingForm availableTimes={[]} />);
    const dateInput = screen.getByLabelText(/Select reservation date/i);
    expect(dateInput).toHaveAttribute('required');
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
});

test('Submit button is disabled when date is empty', () => {
    render(<BookingForm availableTimes={[]} />);
    const submitButton = screen.getByRole('button', { name: /On click confirm your reservation/i });
    expect(submitButton).toBeDisabled();
});