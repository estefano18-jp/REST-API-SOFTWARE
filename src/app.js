import express from 'express';
import softwaresRoutes from './routers/softwares.routes.js';

const app = express();

app.use(express.json())//SERVER RECIBE EL JSON DEL CLIENTE
app.use('/api/', softwaresRoutes);

export default app