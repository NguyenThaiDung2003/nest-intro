import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(@Inject('APP_CONFIG') private readonly appConfig: any) {}

  @Get('info')
  getHello(): string {
    return this.appConfig ;
  }
}
