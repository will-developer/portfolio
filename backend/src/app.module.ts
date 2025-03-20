import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [DbModule, ProjectsModule],
  controllers: [AppController],
})
export class AppModule {}
