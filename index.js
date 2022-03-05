const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const db = require('./server/models');
const buildPath = path.join(__dirname, 'build');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(buildPath));
    app.get('/', (req, res) => { res.sendFile(path.resolve(buildPath, 'index.html')) });
} else {
    app.get('/', (req, res) => {
        res.json({ message: 'Hello World!' });
    })
}

db.sequelize.sync();

require('./server/routes/location.routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});