import { useState } from 'react';
import './HomePage.css';

const testimonials = [
  {
    quote: "They treated my house like their own. The team was friendly, quick, and left every room spotless!",
    author: "Amanda R."
  },
  {
    quote: "Punctual, polite, and incredibly thorough. I couldn’t be happier with the results!",
    author: "Carlos T."
  },
  {
    quote: "Affordable and professional. My house has never looked this clean!",
    author: "Jenna M."
  }
];

const reasons = [
  { imgSrc: 'https://via.placeholder.com/80', text: 'Experienced & Trusted Professionals' },
  { imgSrc: 'https://via.placeholder.com/80', text: 'Eco-Friendly Cleaning Products' },
  { imgSrc: 'https://via.placeholder.com/80', text: 'Flexible Scheduling' },
  { imgSrc: 'https://via.placeholder.com/80', text: 'Competitive Pricing' },
  { imgSrc: 'https://via.placeholder.com/80', text: '100% Satisfaction Guarantee' },
  { imgSrc: 'https://via.placeholder.com/80', text: 'Locally Owned & Operated' },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div id="homeContainer">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-main-text">
            Don’t spend your energy and time cleaning —<br />let us do it for you.
          </h1>
          <h3 className="hero-subtitle">
            Move In/Out • House • Commercial • Years of Trusted Experience
          </h3>
          <a href="/contact" className="hero-btn">
            Get a Quick Quote
          </a>
        </div>
      </section>

      {/* WELCOME TEXT */}
<section id="presentationContainer" className="presentation-flex">
  <div className="presentation-image">
    <img src="/path-to-your-image.jpg" alt="Cleaning service" />
  </div>
  <div className="presentation-text">
    <h1 className="fw-bold mb-4">
      Welcome to <span id="presentationName">Gontijo & Borges Cleaning</span>
    </h1>
    <p className="fw-bold mb-4">
      We provide top-quality, reliable, and eco-friendly house cleaning services tailored to your family's needs.
      Our friendly, trained professionals treat your home with care, making every space shine with comfort and cleanliness.
      <br /><br />
      Proudly serving our community with warmth, honesty, and affordable pricing — because a clean home is a happy home.
    </p>
    <a href="/contact" className="hero-btn mt-3">GET A QUICK QUOTE</a>
  </div>
</section>

      {/* WHY CHOOSE US */}
      <section className="why-container">
        <h2 className="why-title mb-5">Why You Should Hire Us</h2>
        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div className="reason-box" key={idx}>
              <img src={reason.imgSrc} alt={`Reason ${idx + 1}`} className="reason-image" />
              <p className="reason-text">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section">
        <div className="testimonial-left">
          <h2 className="testimonial-title">What Our Clients Are Saying</h2>
          <p className="testimonial-subtext">
            Real reviews from happy homeowners and business owners across Contra Costa County and Lodi.
          </p>
        </div>

        <div className="testimonial-carousel">
          <button className="arrow-button left-arrow" onClick={handlePrev} aria-label="Previous testimonial">
            &#x276E;
          </button>

          <div className="testimonial-content">
            <p className="quote">“{currentTestimonial.quote}”</p>
            <p className="author">– {currentTestimonial.author}</p>
          </div>

          <button className="arrow-button right-arrow" onClick={handleNext} aria-label="Next testimonial">
            &#x276F;
          </button>
        </div>
      </section>

    </div>
  );
}
