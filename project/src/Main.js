import { Routes, Route } from 'react-router-dom'; // Добавь импорт
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import BookingPage from './BookingPage';

function Main() {
  return (
    <main>
      <Routes>
        {/* Главная страница со всеми секциями */}
        <Route path="/" element={
          <>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
          </>
        } />

        {/* Страница бронирования */}
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </main>
  );
}

export default Main;