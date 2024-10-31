import { Body, Controller, Post, Get, Headers, Logger } from '@nestjs/common';
import { DelavalService } from './delaval.service';
import { RegisterDelavalDto } from './dto/register-delaval.dto';
import { DeLavalDataDto } from './dto/delaval-data.dto';

@Controller('delaval')
export class DelavalController {
  constructor(private readonly delavalService: DelavalService) {}

  @Post('/data')
  create(
    @Body() deLabalDataDto: DeLavalDataDto,
    @Headers('authorization') authorization: string,
    @Headers('HardwareKey') HardwareKey: string,
  ) {
    Logger.log(authorization);
    Logger.log(HardwareKey);

    this.delavalService.create(deLabalDataDto.animalData);

    Logger.log(deLabalDataDto.utcDateTime);
  }

  @Post('/register')
  register(
    @Body() registerDelavalDto: RegisterDelavalDto,
    @Headers('authorization') authorization: string,
    @Headers('HardwareKey') HardwareKey: string,
  ) {
    Logger.log(authorization);
    Logger.log(HardwareKey);
    return this.delavalService.register(registerDelavalDto);
  }

  @Get('/keepalive')
  keepalive(
    @Headers('authorization') authorization: string,
    @Headers('HardwareKey') HardwareKey: string,
  ) {
    Logger.log(authorization);
    Logger.log(HardwareKey);
    return this.delavalService.keepAlive();
  }
}
