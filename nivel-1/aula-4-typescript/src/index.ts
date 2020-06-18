import express from 'express';
import {helloWorld} from './routes';

const app = express();

app.get('/', helloWorld);

app.listen((3333), () => {
    console.log(
        'Servidor Executando! ... http://localhost:3333'
    );
});