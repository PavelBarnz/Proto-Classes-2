import Magician from '../magician';

test("Тест класса Magician", () => {
    const nChar = new Magician("nChar");
    const result = {
            "attack": 10,
            "defence": 40,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Magician",
          }

    expect(nChar).toEqual(result);
})

test("Тест метода levelUp класса Magician", () => {
  const nChar = new Magician("nChar");
  nChar.levelUp();

  const result = {
          "attack": 12,
          "defence": 48,
          "health": 100,
          "level": 2,
          "name": "nChar",
          "type": "Magician",
        }

  expect(nChar).toEqual(result);
})

test("Тест метода damage класса Magician", () => {
  const nChar = new Magician("nChar");
  nChar.damage(11);

  const result = {
        "attack": 10,
        "defence": 40,
        "health": 93.4,
        "level": 1,
        "name": "nChar",
        "type": "Magician",
      }
  expect(nChar).toEqual(result);
})