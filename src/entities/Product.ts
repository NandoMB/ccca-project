export interface IProduct {
  description: string;
  price: number;
}

export class Product implements IProduct {
  constructor(readonly description: string, readonly price: number) {}

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }
}
