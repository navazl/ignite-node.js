interface Event {
    game: string;
    participants: number;
    organizer: string;
}

class CreateEventService {

    execute({game, participants, organizer}: Event) {
        console.log(game, participants, organizer)
    }
}

export default new CreateEventService;
