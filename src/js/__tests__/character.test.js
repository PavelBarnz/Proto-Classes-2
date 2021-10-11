import Character from '../character.js';

test("Тест класса Character", () => {
    const nChar = new Character("nChar");
    const result = {
            "health": 100,
            "level": 1,
            "name": "nChar",
          }

    expect(nChar).toEqual(result);
})