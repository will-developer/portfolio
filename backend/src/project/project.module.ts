import { Module } from '@nestjs/common';
import { ProjectPrisma } from './project.prisma';
import { ProjectController } from './project.controller';

@Module({
  controllers: [ProjectController],
  providers: [ProjectPrisma],
})
export class ProjectsModule {}
