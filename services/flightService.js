const Polygon = require('../models/polygon');

function processFlightRequest(flightData, polygonBoundary) {
  const polygon = new Polygon(polygonBoundary);
  if (!polygon.isValid()) {
    throw new Error('Invalid polygon boundary');
  }

  const isInside = polygon.contains(flightData.longitude, flightData.latitude);
  if (isInside) {
    return `Flight ${flightData.flightNumber} is inside the polygon boundary`;
  } else {
    return `Flight ${flightData.flightNumber} is outside the polygon boundary`;
  }
}

module.exports = { processFlightRequest };