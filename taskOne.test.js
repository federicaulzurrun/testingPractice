import stringLength from "./taskOne";

/* Arrange */
const message = {
  passed: 'Length = 5',
  failed: 'The length of the string must be > 0 and < 11'
}

/* Act */
const successFunc = stringLength('feder');
const failFunc = () => stringLength('');

//Assert
test(message.passed, () => { expect(successFunc).toBe(5); });
test(message.failed, () => { expect(failFunc).toThrow('Error') });