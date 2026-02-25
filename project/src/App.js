import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom'; // Добавь этот импорт

function App() {
  return (
    <BrowserRouter>
      <div className='top-bar'>
      <Header />
      <Nav />
      </div>
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;