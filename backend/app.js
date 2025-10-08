const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ status: 'OK App is Running and workinggg' });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    });
}

// Export the app for testing purposes
module.exports = app;
