/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-12 13:44:15
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-12 13:52:51
 */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class InitMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(Date());
    next();
  }
}
