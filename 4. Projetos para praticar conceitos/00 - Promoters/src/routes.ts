import { Request, Response } from 'express';
import CreateEventService from './CreateEventService';
export function createNewEvent(req: Request, res: Response) {
    CreateEventService.execute(({
        game: "Gartic",
        participants: 10,
        organizer: 'Nava'
    }))
}