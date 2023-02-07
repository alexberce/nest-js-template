import {MongoServerError} from 'mongodb';
import {HttpException, HttpStatus} from '@nestjs/common';

export class MongoDatabaseException extends HttpException {
  constructor(exception: MongoServerError) {
    let message = 'Unknown database error', status = HttpStatus.INTERNAL_SERVER_ERROR;

    switch (true) {
    case exception.code === 11000:
      status = HttpStatus.CONFLICT;
      message = `Duplicate unique key '${Object.keys(exception.keyValue)}'`;
      break;

    case exception.name === 'DocumentNotFoundError':
      status = HttpStatus.NOT_FOUND;
      message = 'Document was not found';
      break;

    case exception.name === 'ValidationError':
      status = HttpStatus.BAD_REQUEST;
      message = 'Document validation error';
      break;
    }

    super({message}, status);
  }
}
