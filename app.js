const express = require('express');
const app = express();
const { apiRouter } = require('./controllers/api');
const { mapRouter } = require('./controllers/map');

app.use(express.json());
app.use('/api', apiRouter);
app.use('/map', mapRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});