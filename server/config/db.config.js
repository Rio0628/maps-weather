module.exports = {
    HOST: 'us-cdbr-east-05.cleardb.net',
    USER: 'b6255ed1e31f61',
    PASSWORD: '583cdac6',
    DB: 'heroku_e9bb692ebb90c4f',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

/* 
    OLD DATABASE CONFIG 

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
*/