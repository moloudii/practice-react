import React from "react";
import map from "./coords.json";
// import ImageMapper from "react-image-mapper";
import PicMap from "./world-map.png";
export default function WorldMap({ handleSelectCountry }) {
  return (
    <div>
      {/* <ImageMapper
        src={PicMap}
        map={map}
        width={800}
        imgWidth={1000}
        onClick={handleSelectCountry}
      /> */}
    </div>
  );
}
