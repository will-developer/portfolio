import { Module } from '@nestjs/common';
import { ProjectProvider } from './project.provider';
import { ProjectController } from './project.controller';

@Module({
  controllers: [ProjectController],
  providers: [ProjectProvider],
})
export class ProjectsModule {}
