import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns a non-empty array of times from fetchAPI', () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
});

test('updateTimes returns an updated array of times based on the date', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: '2026-02-27' };
    const result = updateTimes(initialState, action);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
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
    const submitButton = screen.getByLabelText("On Click");
    expect(submitButton).toBeDisabled();
});

test('Submit button is enabled when all fields are valid', () => {
    const mockSubmit = jest.fn();
    render(<BookingForm availableTimes={["17:00"]} submitForm={mockSubmit} dispatch={jest.fn()} />);

    const submitButton = screen.getByLabelText("On Click");

    fireEvent.change(screen.getByLabelText(/Select reservation date/i), { target: { value: '2026-12-01' } });
    fireEvent.change(screen.getByLabelText(/Select reservation time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '4' } });

    expect(submitButton).not.toBeDisabled();
});

test('Submit button is disabled when guests count is invalid', () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={jest.fn()} />);

    const submitButton = screen.getByLabelText("On Click");

    fireEvent.change(screen.getByLabelText(/Select reservation date/i), { target: { value: '2026-12-01' } });
    fireEvent.change(screen.getByLabelText(/Select reservation time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '0' } });

    expect(submitButton).toBeDisabled();
});