import { Module } from '@nestjs/common';
import { PrismaProvider } from './prisma.provider';

@Module({
  controllers: [PrismaProvider],
  exports: [PrismaProvider],
})
export class DbModule {}
