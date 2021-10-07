import Undead from '../undead';

test("Тест класса Undead", () => {
    const nChar = new Undead("nChar");
    const result = {
            "attack": 25,
            "defence": 25,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Undead",
          }

    expect(nChar).toEqual(result);
})

test("Тест метода levelUp класса Undead", () => {
  const nChar = new Undead("nChar");
  nChar.levelUp();

  const result = {
          "attack": 30,
          "defence": 30,
          "health": 100,
          "level": 2,
          "name": "nChar",
          "type": "Undead",
        }

  expect(nChar).toEqual(result);
})

test("Тест метода damage класса Undead", () => {
  const nChar = new Undead("nChar");
  nChar.damage(37);

  const result = {
        "attack": 25,
        "defence": 25,
        "health": 72.25,
        "level": 1,
        "name": "nChar",
        "type": "Undead",
      }
  expect(nChar).toEqual(result);
})