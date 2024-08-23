const express = require('express');
const router = express.Router();
const { getMapConfig, handleMapDraw } = require('../services/mapService');

router.get('/mapConfig', (req, res) => {
  const config = getMapConfig();
  res.json(config);
});

router.post('/drawPolygon', (req, res) => {
  const polygon = req.body;
  const polygonCoords = handleMapDraw(polygon);
  res.json(polygonCoords);
});

module.exports = router;