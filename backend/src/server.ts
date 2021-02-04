import express from 'express';
import routesAppointments from './routes/appointments.routes';
import routesUsers from './routes/appointments.routes';

import './database';

const app = express();

app.use(express.json());

app.use("/appointments",routesAppointments);
app.use("/users",routesUsers);

app.listen(3300);
