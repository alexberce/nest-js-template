import { AbstractDocument } from './abstract.schema';
import { FilterQuery, Model, Connection } from 'mongoose';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected constructor(
    public readonly model: Model<TDocument>,
    private readonly connection: Connection,
  ) {}

  async find(filterQuery: FilterQuery<TDocument>) {
    return this.model.find(filterQuery);
  }

  async startTransaction() {
    const session = await this.connection.startSession();
    session.startTransaction();
    return session;
  }
}
