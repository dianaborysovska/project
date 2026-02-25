import restaurant from "./assets/restaurant.jpg"

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <img src={restaurant} alt="Little Lemon Restaurant" />
        <div className="footer-content">
          <div>
            <h3>Doormat Navigation</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Chicago, IL</p>
            <p>+1 23 456 789 1011</p>
            <p>littlelemon@example.com</p>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;