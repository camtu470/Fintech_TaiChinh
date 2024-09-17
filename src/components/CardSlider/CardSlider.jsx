import React, { useState } from "react";
import "./CardSlider.css";

const cardData = [
  {
    name: "Geoffroy de Crecy Editions",
    floorPrice: "0.01 ETH",
    imageUrl: "https://images2.thanhnien.vn/zoom/700_438/Uploaded/datch/2022_04_26/doge-4918.jpg",
  },
  {
    name: "Factura by Mathias",
    floorPrice: "0.11 ETH",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZNovoDGO_Nkq8Lis471AztKX5jUYkrsumQ&s",
  },
  {
    name: "SALT V4",
    floorPrice: "1.23 ETH",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/006/699/646/original/usd-coin-cryptocurrency-usd-logo-gold-coin-decentralized-digital-money-concept-free-vector.jpg", 
  },
  {
    name: "Maschine",
    floorPrice: "0.14 ETH",
    imageUrl: "https://m.media-amazon.com/images/I/61d65G+qtgL.jpg", 
  },
  {
    name: "Another Artwork",
    floorPrice: "0.22 ETH",
    imageUrl: "https://i.ebayimg.com/images/g/BOAAAOSwQb5hMHUG/s-l1200.jpg", 
  },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleCards = 4; 

  const prevSlide = () => {
    const newIndex = currentIndex === 0 
      ? Math.max(cardData.length - numVisibleCards, 0)
      : Math.max(currentIndex - numVisibleCards, 0);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex + numVisibleCards >= cardData.length
      ? 0  
      : currentIndex + numVisibleCards;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="slider-wrapper" style={{ transform: `translateX(-${(currentIndex / cardData.length) * 100}%)` }}>
        {cardData.map((item, index) => (
          <div key={index} className="slider-card">
            <img src={item.imageUrl} alt={item.name} className="slider-image" />
            <div className="card-details">
              <h3>{item.name}</h3>
              <p>Floor: {item.floorPrice}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default CardSlider;