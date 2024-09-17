import React, { useState } from "react";
import "./TrendingList.css"; // Import your CSS

// Sample data structure
const trendingData = [
  {
    rank: 1,
    name: "Courtyard.io",
    floorPrice: "< 0.01 ETH",
    volume: "15.1 ETH",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4PneXvkpO6rvd1gDTqSa_LRtk35QXIYJTBw&s",
  },
  {
    rank: 2,
    name: "KIP Protocol Genesis Pass",
    floorPrice: "0.05 ETH",
    volume: "4.5 ETH",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5wU70gavAF4EoyRvG-xI0DrOqK1RND2fFNg&s", 
  },
  {
    rank: 3,
    name: "Pepels",
    floorPrice: "0.09 ETH",
    volume: "4.3 ETH",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-1vc1A4DGU1lNWiQ3QAx7vfVjsjvvoZCEw&s", 
  },
  {
    rank: 4,
    name: "egg",
    floorPrice: "0.14 ETH",
    volume: "6 ETH",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxi0zmnLXXd-Kz7goE34ArpAEnP47SB7ieLQ&s", 
  },
  {
    rank: 5,
    name: "DeGods",
    floorPrice: "2.24 ETH",
    volume: "73.8 ETH",
    imageUrl: "https://9746c6837f.vws.vegacdn.vn/posts/files/10-loai-tien-ao-co-gia-tri-va-pho-bien-nhat-hien-nay-7.jpeg", 
  },
];

const TrendingList = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24h");
  const [selectedTab, setSelectedTab] = useState("Trending");

  const handleTimeframeClick = (timeframe) => {
    setSelectedTimeframe(timeframe);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="trending-container">
      <div className="topTreding">
      <div className="tabs">
        <button
          className={selectedTab === "Trending" ? "active-tab" : ""}
          onClick={() => handleTabClick("Trending")}
        >
          Trending
        </button>
        <button
          className={selectedTab === "Top" ? "active-tab" : ""}
          onClick={() => handleTabClick("Top")}
        >
          Top
        </button>
      </div>

      <div className="timeframes">
        {["1h", "6h", "24h", "7d"].map((time) => (
          <button
            key={time}
            className={selectedTimeframe === time ? "active-timeframe" : ""}
            onClick={() => handleTimeframeClick(time)}
          >
            {time}
          </button>
        ))}
      </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Collection</th>
            <th>Floor Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {trendingData.map((item, index) => (
            <tr key={index}>
              <td>{item.rank}</td>
              <td>
                <img src={item.imageUrl} alt={item.name} className="collection-image" />
                {item.name}
              </td>
              <td>{item.floorPrice}</td>
              <td>{item.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrendingList;