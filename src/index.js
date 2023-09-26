//? INITIALISE EXPRESS APP

import express from 'express';
import cors from 'cors'; 
import rootRoute from './routes/rootRoutes.js';

const app = express();

//? MIDDLEWARE FUNCTIONS

//* cors middleware
app.use(cors())

app.use(express.json());

//? PORT INITIALISATION
app.listen(8080);

app.use("/api",rootRoute)
