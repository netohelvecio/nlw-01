import { Injectable } from '@nestjs/common';

export interface IHello {
  message: string
}

@Injectable()
export class AppService {
  getHello(): IHello {
    const hello = { message: 'Hello NLW!' };

    return hello;
  }
}
