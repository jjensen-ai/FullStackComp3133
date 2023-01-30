const expect = require('chai').expect;
const calculator = require('../app/calculator');

describe('Calculate basic arithmitic', () => {
  describe('Addition', () => {
    it('Adds 2 + 2, expected Pass', () => {
      let result = calculator.add(2, 2);

      expect(result).to.equal(4);
    });
  });
  describe('Addition', () => {
    it('Adds 2 + 2, expected Fail', () => {
      let result = calculator.add(2, 2);

      expect(result).to.equal(5);
    });
  });
  describe('Subtraction', () => {
    it('Subtracts 2 - 2, expected Pass', () => {
      let result = calculator.sub(2, 2);

      expect(result).to.equal(0);
    });
  });
  describe('Subtraction', () => {
    it('Subtracts 2 - 2, expected Fail', () => {
      let result = calculator.sub(2, 2);

      expect(result).to.equal(5);
    });
  });
  describe('Multiplication', () => {
    it('Multiply 2 x 5, expected Pass', () => {
      let result = calculator.mul(2, 5);

      expect(result).to.equal(10);
    });
  });
  describe('Multiplication', () => {
    it('Multiply 2 x 5, expected Fail', () => {
      let result = calculator.mul(2, 5);

      expect(result).to.equal(15);
    });
  });
  describe('Division', () => {
    it('Divide 10 / 2, expected Pass', () => {
      let result = calculator.div(10, 2);

      expect(result).to.equal(5);
    });
  });
  describe('Division', () => {
    it('Divide 10 / 2, expected Fail', () => {
      let result = calculator.div(10, 2);

      expect(result).to.equal(15);
    });
  });
});
