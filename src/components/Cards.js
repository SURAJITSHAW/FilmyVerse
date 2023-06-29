import React, { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
  const [data, setData] = useState([
    {
      name: "Aadipurush",
      rating: 1,
      year: 2023,
      src: "https://cdn.gulte.com/wp-content/uploads/2023/04/Aadipurush.jpg",
    },
    {
      name: "Aadipurush",
      rating: 1,
      year: 2023,
      src: "https://cdn.gulte.com/wp-content/uploads/2023/04/Aadipurush.jpg",
    },
    {
      name: "Aadipurush",
      rating: 1,
      year: 2023,
      src: "https://cdn.gulte.com/wp-content/uploads/2023/04/Aadipurush.jpg",
    },
    {
      name: "Aadipurush",
      rating: 1,
      year: 2023,
      src: "https://cdn.gulte.com/wp-content/uploads/2023/04/Aadipurush.jpg",
    },
    {
      name: "Aadipurush",
      rating: 1,
      year: 2023,
      src: "https://cdn.gulte.com/wp-content/uploads/2023/04/Aadipurush.jpg",
    },
    {
      name: "Aadipurush",
      rating: 1,
      year: 2023,
      src: "https://cdn.gulte.com/wp-content/uploads/2023/04/Aadipurush.jpg",
    },
    {
      name: "Aadipurush",
      rating: 1,
      year: 2023,
      src: "https://cdn.gulte.com/wp-content/uploads/2023/04/Aadipurush.jpg",
    },
    {
      name: "Aadipurush",
      rating: 1,
      year: 2023,
      src: "https://cdn.gulte.com/wp-content/uploads/2023/04/Aadipurush.jpg",
    },
  ]);

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">

      {data.map((card, id) => {
        return (
          <div
            key={id}
            className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500"
          >
            <img className="h-72" src={card.src} alt={card.name} />
            <h1>
              <span className="text-gray-500">Name:</span> {card.name}
            </h1>
            <h1 className="flex items-center">
              <span className="text-gray-500  mr-1">Rating:</span>
              <ReactStars size={20} edit={false} value={card.rating} />
            </h1>
            <h1>
              <span className="text-gray-500">Year:</span> {card.year}
            </h1>
          </div>
        );
      })}

    </div>
  );
};

export default Cards;
