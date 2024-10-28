import { Module } from '@nestjs/common';
import { DelavalService } from './delaval.service';
import { DelavalController } from './delaval.controller';

@Module({
  controllers: [DelavalController],
  providers: [DelavalService],
})
export class DelavalModule {}
