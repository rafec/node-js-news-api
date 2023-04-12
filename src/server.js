import express from "express";
import routes from "./routes/routes.js";
import db from "./database/database.js";

const app = express();
const serverPort = 3333;

app.use(express.json());
app.use(routes);

let alter;
if (process.env.IS_DEV) {
    alter = true;
};

try {
    await db.sync({ alter: alter });
    console.log('Connected to database.');

    app.listen(serverPort,
        console.log(`Server started in port ${serverPort}`)
    );
} catch (error) {
    console.log('Error connecting to database!', error);
    process.exit(1);
};

