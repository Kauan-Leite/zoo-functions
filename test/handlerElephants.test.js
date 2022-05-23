const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se o tipo da função vazia retorna undefined', () => {
    expect(typeof handlerElephants()).toBe('undefined');
  });
  it('Verifica se retorna a mensagem de erro caso parametro igual a number', () => {
    expect(handlerElephants(4)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica a quantidade de Elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Verifica se retorna um array com os nomes dos Elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se retorna a idade média dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Verifica se retorna null', () => {
    expect(handlerElephants('blabla')).toEqual(null);
  });
  it('Verifica se retorna o ID do Elefante', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
});
