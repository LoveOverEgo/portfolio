import React from 'react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import './Recognition.css';

interface Recognition {
  author: string;
  profession: string;
  relation: string;
  text: string;
}

const recognitions: Recognition[] = [
  {
    author: 'John Doe',
    profession: 'Software Engineer',
    relation: 'Colleague',
    text: 'Working with [Your Name] has been an absolute pleasure. They are highly skilled and a great team player.'
  },
  {
    author: 'Jane Smith',
    profession: 'Project Manager',
    relation: 'Supervisor',
    text: '[Your Name] consistently delivers high-quality work and is always willing to go the extra mile.'
  },
  {
    author: 'Emily Johnson',
    profession: 'Product Owner',
    relation: 'Client',
    text: '[Your Name] is very knowledgeable and always provides valuable insights for our projects.'
  }
];

const Recognition: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <Element name="recognition" className="section">
      <div className="section-container">
        <h2>Recognition</h2>
        <div className="section-content">
          <Slider {...settings}>
            {recognitions.map((recognition, index) => (
              <div key={index} className="recognition">
                <p className="recognition-text">"{recognition.text}"</p>
                <div className="info-text">
                  <p className="recognition-author">{recognition.author}</p>
                  <p className="recognition-profession"><em>{recognition.profession}</em></p>
                  <p className="recognition-relation"><em>{recognition.relation}</em></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Element>
  );
};

export default Recognition;
