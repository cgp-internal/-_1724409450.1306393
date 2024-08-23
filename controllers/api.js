const express = require('express');
const apiRouter = express.Router();
const { processFlightRequest } = require('../services/flightService');

apiRouter.post('/flight-request', (req, res) => {
  try {
    const flightData = req.body;
    const polygonBoundary = req.query.polygonBoundary;
    const result = processFlightRequest(flightData, polygonBoundary);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { apiRouter };