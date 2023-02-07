import {
  Catch,
  Logger,
  HttpStatus,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
  BadRequestException,
} from '@nestjs/common';

import { MongoServerError } from 'mongodb';
import { MongoDatabaseException } from '../../libs/database/mongo';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    Logger.log(exception);

    if(exception instanceof MongoServerError) {
      exception = new MongoDatabaseException(exception);
    }

    if (
      exception instanceof MongoDatabaseException ||
      exception instanceof BadRequestException ||
      exception instanceof HttpException
    ) {
      return response
        .status(exception.getStatus())
        .json(exception.getResponse());
    }

    return response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({
        retryable: true,
        message: 'We encountered an internal server error, please try re-sending your request',
      });
  }
}
