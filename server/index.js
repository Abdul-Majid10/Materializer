import path from 'path';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import RegisterationRouter from './router/registerationRouter.js';
import dotenv from "dotenv";

const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
dotenv.config();
app.disable('x-powered-by'); // less hackers know about our stack

const port = process.env.PORT || 8080;


/** HTTP GET Request */
app.get('/', (req, res) => {
  res.status(200).json("Home Route");
});


/** api routes */
app.use('/api/registeration', RegisterationRouter)


/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})
