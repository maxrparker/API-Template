import { db } from "../data";
import { GenericService } from "./generic-service";
import { Example } from "../data/models";

const SCHEMA = "<DATABASE SCHEMA>";
const TABLE = "<DATABASE TABLE>";

export class ExampleSerivce implements GenericService<any> {
  async getAll(): Promise<Example[]> {
    return await db.withSchema(SCHEMA).from(TABLE);
  }

  async get(id: string): Promise<Example> {
    return await db(TABLE).withSchema(SCHEMA).where("id", id).first();
  }

  async create(item: Example): Promise<Example> {
    return await db(TABLE).withSchema(SCHEMA).insert(item);
  }

  async update(id: string, item: Example): Promise<Example> {
    return await db(TABLE).withSchema(SCHEMA).where("id", id).update(item);
  }

  async delete(id: string): Promise<Example> {
    return await db(TABLE).withSchema(SCHEMA).where("id", id).del();
  }
}
