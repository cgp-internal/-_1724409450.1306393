const polygonModel = require("../models/polygon");

const getMapConfig = () => {
  return {
    center: [37.7749, -122.4194],
    zoom: 12,
    layers: [
      {
        name: "OSM",
        layer: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      },
    ],
  };
};

const handleMapDraw = (polygon) => {
  const polygonCoords = polygonModel.getPolygonCoords(polygon);
  // Assume you have a function to add the polygon to the map
  addPolygonToMap(polygonCoords);
  return polygonCoords;
};

module.exports = { getMapConfig, handleMapDraw };