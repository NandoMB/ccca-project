import { describe, expect, it } from 'vitest';
import CPF from '../src/entities/CPF';

describe('CPF Tests', () => {
  it('Should validate a CPF when given a valid CPF', () => {
    expect(new CPF('600.381.640-60').getValue()).toBe('600.381.640-60');
    expect(new CPF('555.415.280-54').getValue()).toBe('555.415.280-54');
    expect(new CPF('701.536.820-00').getValue()).toBe('701.536.820-00');
    expect(new CPF('902.639.870-00').getValue()).toBe('902.639.870-00');
    expect(new CPF('938.327.240-60').getValue()).toBe('938.327.240-60');
    expect(new CPF('578.030.120-43').getValue()).toBe('578.030.120-43');
  });
  it('Should invalidate a CPF when given an invalid CPF', () => {
    expect(() => new CPF('')).toThrowError(/^Invalid CPF!$/);
    expect(() => new CPF('000.000.000-0')).toThrowError(/^Invalid CPF!$/);
    expect(() => new CPF('000.000.000-00')).toThrowError(/^Invalid CPF!$/);
    expect(() => new CPF('000.000.000-01')).toThrowError(/^Invalid CPF!$/);
  });
});

