import express from 'express';
import { createNewEvent } from './routes';

const app = express();

app.get('/', createNewEvent)

app.listen(3333)