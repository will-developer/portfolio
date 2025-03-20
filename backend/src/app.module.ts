import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ProjectsModule } from './projects/projects.module';
import { TechnologyModule } from './technology/technology.module';
import { PrismaProvider } from './db/prisma.provider';
import { TechnologyProvider } from './technology/technology.provider';

@Module({
  imports: [DbModule, ProjectsModule, TechnologyModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
