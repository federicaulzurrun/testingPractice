import capitalizeFirstLetter from "./taskfour";

describe('capitalizeFirstLetter', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
    expect(capitalizeFirstLetter('Test')).toBe('Test');
  });

  it('returns an empty string if the input is empty', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });
});

