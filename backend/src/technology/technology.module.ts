import { Module } from '@nestjs/common';
import { TechnologyController } from './technology.controller';
import { DbModule } from '../db/db.module';
import { TechnologyProvider } from './technology.provider';

@Module({
  imports: [DbModule],
  controllers: [TechnologyController],
  providers: [TechnologyProvider],
})
export class TechnologyModule {}
