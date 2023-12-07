// server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./DB/sequelize.js";

dotenv.config({ path: '../../config/.env' });

const app = express();

app.use(cors());

const startServer = async () => {
    try {
        await sequelize.sync();
        console.log("Database sync successful!");
        const port = process.env.SERVER_PORT || 3000; // Default to 3000 if SERVER_PORT is not defined
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (err) {
        console.log("Unable to sync database:", err);
    }
};

startServer();
