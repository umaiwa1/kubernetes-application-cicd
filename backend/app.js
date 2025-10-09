require('dotenv').config();

const express = require('express');
const app = express();

// envs se variables lo
const port = process.env.PORT;
const statusMessage = process.env.STATUS_MESSAGE;

app.get('/', (req, res) => {
    res.json({ status: statusMessage });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`✅ App listening at http://localhost:${port}`);
    });
}

module.exports = app;
