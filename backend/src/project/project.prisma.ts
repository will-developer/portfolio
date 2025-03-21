import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../db/prisma.provider';
import { Projects } from '../../../core/src';

@Injectable()
export class ProjectPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<Projects[]> {
    return this.prisma.project.findMany() as any;
  }

  async getById(id: number): Promise<Projects[] | null> {
    return this.prisma.project.findUnique({
      where: { id },
      include: { technology: true },
    }) as any;
  }
}
