const {average} = require('../para_probar');

describe('average', () => {
    /* test('ingresar un solo valor', () => {
        const resultado = average ([1]);

        expect(resultado).toBe(1);
    }) */

    test('ingresar un solo valor', () => {
        expect(average([1])).toBe(1);
    })

    test('ingresar un solo valor', () => {
        expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
    })

    //Crear un test para probar un valor undefined
    // expect(average()).toBe();

    test('Para probar un valor undifend', () => {
        expect(average()).toBeUndefined();
    });
})
