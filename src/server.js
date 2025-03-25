const express = require('express');
const { PORT } = require('./config');
const logger = require('./helpers/logger');
const app = express();
app.use(express.json());

app.use('/api/v1',require('./routes/mainRoute'));

app.listen(PORT, () => {
    logger.info(`SERVER STARTED AT PORT - ${PORT}`)
    console.log(`Server running at ${PORT}`)
})