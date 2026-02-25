function Reviews() {
  const reviews = [
    { id: 1, name: "Alex P.", text: "Best Greek salad in town!" },
    { id: 2, name: "Maria S.", text: "Amazing service and great food." },
    { id: 3, name: "David L.", text: "Loved the fresh lemon dessert." },
    { id: 4, name: "Elena K.", text: "Authentic recipes and modern twist." }
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h1>Testimonials</h1>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="rating-stars">
                <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
              </div>
              <div className="user-info">
                <img src={`https://i.pravatar.cc/150?u=${review.id}`} alt={review.name} />
                <h3>{review.name}</h3>
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;