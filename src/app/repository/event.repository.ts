import rawSqlQueries from "../constant/raw.sql.queries";
import { EventModel } from "../model/event.model";

const createEvent = async (client: any, event: EventModel) => {
  return (
    await client.query(rawSqlQueries.createEventQuery, [
      event.name,
      event.description,
      event.rules,
    ])
  ).rows;
};

const geEventByName = async (client: any, event: EventModel) => {
  return (await client.query(rawSqlQueries.geEventByNameQuery, [event.name]))
    .rows;
};

export default {
  createEvent,
  geEventByName,
};
