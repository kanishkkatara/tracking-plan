import logger from "../config/logger";
import BadRequestError from "../error/bad.request.error";
import { EventModel } from "../model/event.model";
import eventRepository from "../repository/event.repository";

const createEvent = async (client: any, eventData: EventModel) => {
  const existingEvent = await eventRepository.geEventByName(client, eventData);
  logger.debug(`existingEvent: ${existingEvent}`);
  if (existingEvent.length > 0) {
    throw new BadRequestError(`Event named ${eventData.name} already exists`);
  }
  return (await eventRepository.createEvent(client, eventData))[0];
};

export default {
  createEvent,
};
