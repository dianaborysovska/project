import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className='top-bar'>
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </HashRouter>
  );
}

export default App;