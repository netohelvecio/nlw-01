import { Controller, Get } from '@nestjs/common';
import { AppService, IHello } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IHello {
    return this.appService.getHello();
  }
}
