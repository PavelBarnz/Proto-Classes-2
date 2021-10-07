import Character from '../character.js';

test("Тест класса Character", () => {
    const nChar = new Character("nChar");
    const result = {
            "attack": 0,
            "defence": 0,
            "health": 100,
            "level": 1,
            "name": "nChar",
          }

    expect(nChar).toEqual(result);
})

// test("Тест ошибки класса Character", () => {

//     expect(new Character("n")).toThrowError('Не корректные данные');
// })

test("Тест метода levelUp класса Character", () => {
    const nChar = new Character("nChar");
    nChar.levelUp();

    const result = {
            "attack": 0,
            "defence": 0,
            "health": 100,
            "level": 2,
            "name": "nChar",
          }

    expect(nChar).toEqual(result);
})

test("Тест метода damage класса Character", () => {
    const nChar = new Character("nChar");
    nChar.damage(26);

    const result = {
        name: 'nChar',
        attack: 0,
        defence: 0,
        health: 74,
        level: 1
      }
    expect(nChar).toEqual(result);
})