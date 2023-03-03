import { EventModel } from "../model/event.model";
import eventRepository from "../repository/event.repository";

const createEvent = async (eventData: EventModel) => {
  return (await eventRepository.createEvent(eventData))[0];
};

export default {
  createEvent,
};
