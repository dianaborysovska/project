import restaurant_food from './assets/restauranfood.jpg';

function CallToAction() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button className="yellow-button">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={restaurant_food} alt="Restaurant food" />
      </div>
    </section>
  );
}

export default CallToAction;