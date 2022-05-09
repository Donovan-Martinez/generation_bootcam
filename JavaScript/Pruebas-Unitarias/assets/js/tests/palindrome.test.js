//Importar;
const { palindrome } = require('../para_probar');
//Primer test unitario
test('palindrome de generation', () => {
    const resultado  = palindrome('generation');

    //comparar
    expect(resultado).toBe('noitareneg');
});

test('palindrome usando un string vacio', () => {
    const resultado  = palindrome('');

    expect(resultado).toBe('');
});

test('palindrome usando undefined', () => {
    const resultado  = palindrome();

    expect(resultado).toBe(undefined);
});
