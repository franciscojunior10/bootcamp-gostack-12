import { Request, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'franciscojn49@gmail.com',
        password: '1232435',
        techs: [
            'Node.js', 
            'ReactJS',
            { title: 'Javascript', experience: 100 },
        ],
    });

    return response.json({ message: 'ok' })
}