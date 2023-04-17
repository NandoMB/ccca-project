import { describe, expect, it } from 'vitest';
import { Product } from '../src/entities/Product';
import { Order } from '../src/entities/Order';

describe('Order Tests', () => {
  it('Should create an order', () => {
    const egg = new Product('Ovo', 13);
    const pumpkin = new Product('Abóbora', 30);
    const filetSteak = new Product('Picanha', 100);
    const order = new Order('600.381.640-60');
    order.addToCart(egg, 12);
    order.addToCart(pumpkin, 4);
    order.addToCart(filetSteak, 1);
    expect(order.checkout()).toEqual(376);
  });
  it('Should create an order with 10% of discount', () => {
    const egg = new Product('Ovo', 13);
    const pumpkin = new Product('Abóbora', 30);
    const filetSteak = new Product('Picanha', 100);
    const order = new Order('600.381.640-60');
    order.addToCart(egg, 12);
    order.addToCart(pumpkin, 4);
    order.addToCart(filetSteak, 1);
    order.addDiscount(10);
    expect(order.checkout()).toEqual(338.4);
  });
  it('Should throw an error when create an order with invalid CPF', () => {
    expect(() => new Order('000.000.000-00')).toThrowError(/^Invalid CPF!$/);
  });
});
