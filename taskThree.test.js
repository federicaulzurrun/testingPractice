import { calculatorApp } from "./taskThree";

const message = {
  add : 'the result of the sum is: ',
  multiply : 'the result of the multiplication is: ',
  subtract : 'the result of the subtraction is: ',
}

const addition = calculatorApp.add(3, 7);
const multiply = calculatorApp.multiply(15, 5);
const subtract = calculatorApp.subtract(10, 4);

describe('calculate', () => {
  test(message.add, () => {expect(addition).toBe(10)});
  test(message.multiply, () => {expect(multiply).toBe(75)});
  test(message.subtract, () => {expect(subtract).toBe(6)});
});