import { Routes, Route } from 'react-router-dom';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import BookingPage from './BookingPage';

function Main() {
  return (
    <main>
      <Routes>
        {}
        <Route path="/" element={
          <>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
          </>
        } />

        {}
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </main>
  );
}

export default Main;