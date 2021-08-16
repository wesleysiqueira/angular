import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should 1 + 4 equal 5', () => {
    let resultado = service.calcular(1,4, CalculadoraService.SOMA);
    expect(resultado).toEqual(5)
  })

  it('should 1 - 4 equal -3', () => {
    let resultado = service.calcular(1,4, CalculadoraService.SUBTRACAO);
    expect(resultado).toEqual(-3)
  })

  it('should 1 * 4 equal 4', () => {
    let resultado = service.calcular(1,4, CalculadoraService.MULTIPLICACAO);
    expect(resultado).toEqual(4)
  })

  it('should 4 / 2 equal 2', () => {
    let resultado = service.calcular(4,2, CalculadoraService.DIVISAO);
    expect(resultado).toEqual(2)
  })

  it('should return zero', () => {
    let resultado = service.calcular(1,4, '%');
    expect(resultado).toEqual(0)
  })
});
