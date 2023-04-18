import app from "./app.js";
import db from "./database/database.js";

const serverPort = 3333;

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

