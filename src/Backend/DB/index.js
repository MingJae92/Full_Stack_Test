// DB/index.js
import sequelize from "./sequelize";

const authenticateDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}

authenticateDatabase();

export { sequelize };
