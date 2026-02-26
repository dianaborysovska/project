import mario_and_adrian_a from './assets/mario_and_adrian_a.jpg';
import mario_and_adrian_b from './assets/mario_and_adrian_b.jpg';

function Chicago() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          Founded by brothers Mario and Adrian, we bring the flavors of Italy and Greece to the heart of Chicago.
        </p>
      </div>
      <div className="about-images">
        <img src={mario_and_adrian_a} alt="Mario and Adrian 1" className="img-top" />
        <img src={mario_and_adrian_b} alt="Mario and Adrian 2" className="img-bottom" />
      </div>
    </section>
  );
}

export default Chicago;