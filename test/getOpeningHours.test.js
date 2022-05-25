const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Primeiro Teste', () => {
    const hours = { Friday: { close: 8, open: 10 }, Monday: { close: 0, open: 0 }, Saturday: { close: 10, open: 8 }, Sunday: { close: 8, open: 8 }, Thursday: { close: 8, open: 10 }, Tuesday: { close: 6, open: 8 }, Wednesday: { close: 6, open: 8 } };
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Segundo Teste', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Terceiro Teste', () => {
    expect(getOpeningHours('Friday', '10:20-AM')).toBe('The zoo is open');
  });
  it('Quarto Teste', () => {
    expect(() => getOpeningHours('Friday', '09:12-zM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Quinto Teste', () => {
    expect(() => getOpeningHours('sapos', '09:12-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Sexto Teste', () => {
    expect(() => getOpeningHours('Monday', '99:12-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Setimo Teste', () => {
    expect(() => getOpeningHours('Monday', '07:92-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('Oitavo Teste', () => {
    expect(() => getOpeningHours('Monday', 'sapo')).toThrowError(new Error('The hour should represent a number'));
  });
});
