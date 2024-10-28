import { Injectable } from '@nestjs/common';
import { DataDelavalDto } from './dto/data-delaval.dto';
import { RegisterDelavalDto } from './dto/register-delaval.dto';

@Injectable()
export class DelavalService {
  create(createDelavalDto: DataDelavalDto[]) {
    createDelavalDto.forEach((delaval, index) => {
      console.log('---registro ', index);
      console.log(delaval);
    });
  }

  register(registerDelavalDto: RegisterDelavalDto) {
    console.log(registerDelavalDto.hardwareKey);
  }

  keepAlive() {
    console.log('keep alive');
    return { message: 'keep alive ' + new Date().toISOString() };
  }
}
