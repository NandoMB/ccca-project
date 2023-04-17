export default class CPF {
  private DIGIT_MULTIPLIER_1 = 10;
  private DIGIT_MULTIPLIER_2 = 11;

  constructor(private cpf: string) {
    if (!this.isValid(cpf)) throw new Error('Invalid CPF!');
    this.cpf = cpf;
  }

  private isValid(cpf: string) {
    if (this.isNullish(cpf)) return false;
    cpf = this.parseOnlyDigits(cpf);
    if (this.isInvalidSize(cpf)) return false;
    if (this.isEveryDigitTheSame(cpf)) return false;
    const digit1 = this.execute(cpf, this.DIGIT_MULTIPLIER_1);
    const digit2 = this.execute(cpf, this.DIGIT_MULTIPLIER_2);
    return this.getVerifyingDigit(cpf) === `${digit1}${digit2}`;
  }

  private isNullish(cpf: string) {
    return !cpf;
    // return cpf === null || cpf === undefined || cpf === '';
  }

  private parseOnlyDigits(cpf: string) {
    return cpf.replace(/[.-\s]/g, '');
  }

  private isInvalidSize(cpf: string) {
    return cpf.length !== 11;
  }

  private isEveryDigitTheSame(cpf: string) {
    const firstDigit = cpf[0];
    return cpf.split('').every(digit => digit === firstDigit);
  }

  private execute(cpf: string, multiplier: number) {
    let accumulator = 0;
    for (const digit of cpf) {
      if (multiplier <= 1) break;
      accumulator += multiplier * parseInt(digit);
      multiplier--;
    }
    const rest = accumulator % 11;
    return rest < 2 ? 0 : 11 - rest;
  }

  private getVerifyingDigit(cpf: string) {
    return cpf.substring(cpf.length - 2, cpf.length);
  }

  getValue() {
    return this.cpf;
  }
}
