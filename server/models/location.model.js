module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define('location', {
        name: { type: Sequelize.STRING },
        long: { type: Sequelize.DECIMAL(10, 2) },
        lat: { type: Sequelize.DECIMAL(10, 2) },
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