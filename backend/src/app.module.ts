import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ProjectsModule } from './projects/projects.module';
import { TechnologyModule } from './technology/technology.module';

@Module({
  imports: [DbModule, ProjectsModule, TechnologyModule],
  controllers: [AppController],
})
export class AppModule {}
