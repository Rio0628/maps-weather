module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define('location', {
        name: { type: Sequelize.STRING },
        long: { type: Sequelize.FLOAT(11) },
        lat: { type: Sequelize.FLOAT(11) },
        setAsMain: { type: Sequelize.BOOLEAN }
    });
    return Location;
}

/* 
    MODEL WILL BE

    name
    long
    lat
    isMain

*/