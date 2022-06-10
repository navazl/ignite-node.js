"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewEvent = void 0;
const CreateEventService_1 = __importDefault(require("./CreateEventService"));
function createNewEvent(req, res) {
    CreateEventService_1.default.execute(({
        game: "Gartic",
        participants: 10,
        organizer: 'Nava'
    }));
}
exports.createNewEvent = createNewEvent;
