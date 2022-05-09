import React, { useState } from "react";
import Info from "./info/Info";
import WorldMap from "./Map";
import Summary from "./summary/Summary";

export default function AppMap() {
  const [selectedCountry, setSelectedCountry] = useState("iran");
  const handleSelectCountry = (event) => {
    setSelectedCountry(event.name);
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col col-md-9">
          <WorldMap handleSelectCountry={handleSelectCountry} />
        </div>
        <div className="col-12 col-md-3">
          <Info />
        </div>
      </div>
      <div className="row mt-3">
        <Summary />
      </div>
    </div>
  );
}
