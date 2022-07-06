'use strict';

// 3rd Party Resources
const express = require('express');
const PORT = process.env.PORT || 3001

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/auth');
const v1Routes = require('./routes/v1.js');
const v2Routes = require('./routes/v2.js');
const logger = require('./middleware/logger.js');

// Prepare the express app
const app = express();

// App Level MW

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Routes
app.use(authRoutes);
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Catchalls
app.use('*', notFound);
app.use(errorHandler);

module.exports = {
server: app,
  start: () => {
    if (!PORT) { throw new Error('Missing Port'); }
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
