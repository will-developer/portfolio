import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { DbModule } from '../db/db.module';
import { ProjectPrisma } from './project.prisma';

@Module({
  imports: [DbModule],
  controllers: [ProjectController],
  providers: [ProjectPrisma],
})
export class ProjectsModule {}
