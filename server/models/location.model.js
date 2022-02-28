module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define('location', {
        name: { type: Sequelize.STRING },
        currentWeather: { type: Sequelize.JSON },
        hourlyFrcst: { type: Sequelize.JSON },
        ftrDailyFrcst: { type: Sequelize.JSON },
    });
    return Location;
}