import { Body, Controller, Post, Get } from '@nestjs/common';
import { DelavalService } from './delaval.service';
import { DataDelavalDto } from './dto/data-delaval.dto';
import { RegisterDelavalDto } from './dto/register-delaval.dto';

@Controller('delaval')
export class DelavalController {
  constructor(private readonly delavalService: DelavalService) {}

  @Post('/data')
  create(@Body() createDelavalDto: DataDelavalDto[]) {
    return this.delavalService.create(createDelavalDto);
  }

  @Post('/register')
  register(@Body() registerDelavalDto: RegisterDelavalDto) {
    return this.delavalService.register(registerDelavalDto);
  }

  @Get('/keepalive')
  keepalive() {
    return this.delavalService.keepAlive();
  }
}
