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
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <p>Facebook</p>
                <p>Instagram</p>   
            </div>
        </footer>
    );
}

export default Footer;