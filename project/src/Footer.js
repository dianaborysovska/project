import logo from './assets/logo.svg';

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt="Little Lemon" />
            </div>
            <nav>
                <h3>Navigation</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
            <div>
                <h3>Contact</h3>
                <p>Address</p>
                <p>+1 23 4567 8910</p>
                <p>littlelemon@example.com</p>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <p><a href="/facebook">Facebook</a></p>
                <p><a href="/instagram">Instagram</a></p>   
            </div>
        </footer>
    );
}

export default Footer;