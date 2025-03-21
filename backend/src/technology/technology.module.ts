import { Module } from '@nestjs/common';
import { TechnologyController } from './technology.controller';
import { DbModule } from '../db/db.module';
import { TechnologyPrisma } from './TechnologyPrisma';

@Module({
  imports: [DbModule],
  controllers: [TechnologyController],
  providers: [TechnologyPrisma],
})
export class TechnologyModule {}
