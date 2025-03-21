import { Controller, Get, Param } from '@nestjs/common';
import { ProjectPrisma } from './project.prisma';
import { Project } from '@prisma/client';

@Controller('projects')
export class ProjectController {
  constructor(private readonly repository: ProjectPrisma) {}

  @Get()
  async getAll(): Promise<Project[]> {
    return this.repository.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Project | null> {
    return this.repository.getById(Number(id));
  }
}
