import { Injectable } from '@nestjs/common';
import { AnimalDataDto } from './dto/animal-data.dto';
import { RegisterDelavalDto } from './dto/register-delaval.dto';
import { format } from 'date-fns';

@Injectable()
export class DelavalService {
  create(createDelavalDto: AnimalDataDto[]) {
    createDelavalDto.forEach((delaval, index) => {
      console.log('---registro ', index);
      console.log(delaval);
    });
  }

  register(registerDelavalDto: RegisterDelavalDto) {
    console.log(registerDelavalDto.hardwareKey);
    return {
      token: 'faketoken123545248u234h234i24y234y23i4',
    };
  }

  keepAlive() {
    console.log('keep alive');
    return {
      message:
        'Activo. Última prueba:' + format(new Date(), 'dd/MM/yyyy HH:mm:ss'),
    };
  }
}
