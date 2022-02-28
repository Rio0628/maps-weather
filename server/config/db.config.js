module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'Mariofto700.',
    DB: 'weatherlocations',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}