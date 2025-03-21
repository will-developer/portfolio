import { Injectable } from '@nestjs/common';
import { PrismaProvider } from '../db/prisma.provider';
import { Technology } from '../../../core/src';

@Injectable()
export class TechnologyPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<Technology[]> {
    return this.prisma.technology.findMany();
  }

  async getSpotlight(): Promise<Technology[]> {
    return this.prisma.technology.findMany({
      where: {
        destaque: true,
      },
    });
  }
}
