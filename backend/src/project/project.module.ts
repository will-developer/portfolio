import { Module } from '@nestjs/common';
import { ProjectPrisma } from './project.prisma';
import { ProjectController } from './project.controller';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ProjectController],
  providers: [ProjectPrisma],
})
export class ProjectsModule {}
