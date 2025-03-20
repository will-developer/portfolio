import { Injectable } from '@nestjs/common';
import { Id } from '@core';

@Injectable()
export class AppService {
  getHello(): string {
    return 'o import: ' + Id.gerar();
  }
}
