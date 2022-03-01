const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./server/models');

db.sequelize.sync();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
})

require('./server/routes/location.routes')(app);

const PORT =  process.env.PORT || 8080;

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});