import { Controller, Get } from '@nestjs/common';
import { TechnologyProvider } from './technology.provider';
import { Technology } from '@core';

@Controller('technology')
export class TechnologyController {
  constructor(private readonly repository: TechnologyProvider) {}

  @Get()
  async getAll(): Promise<Technology[]> {
    return this.repository.getAll();
  }

  @Get('spotlight')
  async getSpotlight(): Promise<Technology[]> {
    return this.repository.getSpotlight();
  }
}
