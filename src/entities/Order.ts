import { IProduct } from './Product';
import CPF from './CPF';

interface ICartItem {
  product: IProduct;
  amount: number;
}

export class Order {
  private cart: ICartItem[] = [];
  private discount = 0;

  constructor(private cpf: string) {
    this.cpf = new CPF(cpf).getValue();
  }

  addToCart(product: IProduct, amount: number) {
    this.cart.push({ product, amount });
  }

  addDiscount(discount: number) {
    this.discount = discount / 100;
  }

  print() {
    const tableHeader = ['Product', 'Price', 'Amount', 'Subtotal'];
    const tableData = this.cart.map(item => ({
      Product: item.product.description,
      Price: item.product.price,
      Amount: item.amount,
      Subtotal: item.product.price * item.amount
    }));
    console.table(tableData, tableHeader);
  }

  checkout() {
    const subtotal = this.cart.reduce((acc, current) => acc + (current.product.price * current.amount), 0);
    const totalDiscount = subtotal * this.discount;
    return subtotal - totalDiscount;
  }
}
