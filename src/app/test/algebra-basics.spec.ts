import { addPositiveNumbers, multiplyNumbers } from './algebra-basics';

describe('addPositiveNumbers', () => {
  it ('should return 0 if one of the input is negative number', () => {
    const result = addPositiveNumbers(5, -3);
    expect(result).toBe(0);
  });

  it('should return 12 when input1 is 5 and input2 is 7', () => {
    const result = addPositiveNumbers(5, 7);
    expect(result).toBe(12);
  });

  it('should return 0 when both input1 and input2 is negative', () => {
    const result = addPositiveNumbers(-5, -7);
    expect(result).toBe(0);
  });
});

describe('multiplyNumbers', () => {
  it('should return 15', () => {
    const result = multiplyNumbers(5, -3);
    expect(result).toBe(-15);
  });
});
