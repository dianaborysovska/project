import './App.css'
import greek_salad from './assets/greek_salad.jpg';
import bruchetta from './assets/bruchetta.svg';
import lemon_dessert from './assets/lemon_dessert.jpg';

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h1>This weeks specials!</h1>
        <button className="yellow-button">Online Menu</button>
      </div>

      <div className="container">
        <section className="card">
          <img src={greek_salad} alt="Greek salad" />
          <h3>Greek salad <span>$12.99</span></h3>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <button>Order a delivery</button>
        </section>

        <section className="card">
          <img src={bruchetta} alt="Bruchetta" />
          <h3>Bruchetta <span>$5.99</span></h3>
          <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes and basil.</p>
          <button>Order a delivery</button>
        </section>

        <section className="card">
          <img src={lemon_dessert} alt="Lemon Dessert" />
          <h3>Lemon Dessert <span>$5.00</span></h3>
          <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <button>Order a delivery</button>
        </section>
      </div>
    </section>
  );
}

export default Specials;