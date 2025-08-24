import React from 'react';
import { Carousel } from 'react-bootstrap';

function About() {
  return (
    <div>
      <h2>About Our Team</h2>
      <p>We are a small team of developers building delightful movie experiences.</p>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://picsum.photos/900/300?random=1" alt="First slide" />
          <Carousel.Caption>
            <h3>Design</h3>
            <p>Beautiful UI and UX.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://picsum.photos/900/300?random=2" alt="Second slide" />
          <Carousel.Caption>
            <h3>Engineering</h3>
            <p>Reliable and fast applications.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://picsum.photos/900/300?random=3" alt="Third slide" />
          <Carousel.Caption>
            <h3>Support</h3>
            <p>Friendly customer support.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default About;
