import React, { useState } from 'react';

const moonData = [
  {
    timestamp: "2025-04-20T00:00:00Z",
    location: "New York, USA",
    moon_angle: 179.3,
    visibility: 0.92,
  },
  {
    timestamp: "2025-04-20T00:15:00Z",
    location: "Tokyo, Japan",
    moon_angle: 182.1,
    visibility: 0.89,
  },
  {
    timestamp: "2025-04-20T00:30:00Z",
    location: "Cairo, Egypt",
    moon_angle: 177.6,
    visibility: 0.85,
  },
  {
    timestamp: "2025-04-20T00:45:00Z",
    location: "Sydney, Australia",
    moon_angle: 180.4,
    visibility: 0.94,
  },
  {
    timestamp: "2025-04-20T01:00:00Z",
    location: "Paris, France",
    moon_angle: 176.9,
    visibility: 0.81,
  },
];

const Body = () => {
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const filteredData = moonData.filter(item =>
    item.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section>
        <input
          type="text"
          placeholder="Search location"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedLocation(null); 
          }}
        />
      </section>

      <div className="main-div">
        {selectedLocation === null ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="moon-div"
              onClick={()=>setSelectedLocation(item)}
            >
              <h2 className="location">{item.location}</h2>
              <p>Time: {item.timestamp}</p>
              <p>Moon Angle: {item.moon_angle}</p>
              <p>Visibility: {item.visibility}</p>
            </div>
          ))
        ) : (
          <div className="moon-div">
            <h2 className="location">{selectedLocation.location}</h2>
            <p>Time: {selectedLocation.timestamp}</p>
            <p>Moon Angle: {selectedLocation.moon_angle}</p>
            <p>Visibility: {selectedLocation.visibility}</p>
            <button onClick={()=>setSelectedLocation(null)}>Go Back</button>
          </div>
        )}
    </div>
    </>
  );
};

export default Body;  