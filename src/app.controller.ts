/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-09 10:34:13
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-12 10:01:11
 */
import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return { message: 'This is CBMS / CRS API , Welcome!' };
  }
}
