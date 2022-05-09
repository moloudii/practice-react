import React from "react";
import map from "./coords.json";
import ImageMapper from "react-image-mapper";
import PicMap from "./world-map.png";
export default function WorldMap() {
  return (
    <div>
      <ImageMapper src={PicMap} map={map} />
    </div>
  );
}
