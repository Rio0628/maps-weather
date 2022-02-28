const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./server/models');
let corsOptions = { origin: 'http://localhost:8081' };

db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and re-sync db.');
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
})

const PORT =  process.env.PORT || 8080;

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});