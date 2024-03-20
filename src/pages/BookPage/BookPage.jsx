import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/Image1.jpg';
import Image2 from '../../assets/Image2.jpg';
import Image3 from '../../assets/Image3.jpg';
import Image4 from '../../assets/Image4.jpg';
import './BookPage.css';


const Card = ({ id, title, imageUrl }) => (
  <div className="card">
    <Link to={`/details/${id}`}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
    </Link>
  </div>
);

const BookPage = () => {
  const cards = [
    { id: 1, title: 'HEKTOR CONTAINER HOTEL', imageUrl: Image1 },
    { id: 2, title: 'VARBLANE TERRACE', imageUrl: Image2 },
    { id: 3, title: 'GOURMET COFFEE RESTORAN JUUR', imageUrl: Image3 },
    { id: 4, title: 'LITERAAT | TELLISKIVI RAHVA RAAMAT', imageUrl: Image4 },

    // Add more cards as needed
  ];

  return (
    <div className="card-container">
      {cards.map(card => (
        <Card id={card.id} title={card.title} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default BookPage;