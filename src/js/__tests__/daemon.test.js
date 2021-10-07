import Daemon from '../daemon';

test("Тест класса Daemon", () => {
    const nChar = new Daemon("nChar");
    const result = {
            "attack": 10,
            "defence": 40,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Daemon",
          }

    expect(nChar).toEqual(result);
})

test("Тест метода levelUp класса Daemon", () => {
  const nChar = new Daemon("nChar");
  nChar.levelUp();

  const result = {
          "attack": 12,
          "defence": 48,
          "health": 100,
          "level": 2,
          "name": "nChar",
          "type": "Daemon",
        }

  expect(nChar).toEqual(result);
})

test("Тест метода damage класса Daemon", () => {
  const nChar = new Daemon("nChar");
  nChar.damage(81);

  const result = {
        "attack": 10,
        "defence": 40,
        "health": 51.4,
        "level": 1,
        "name": "nChar",
        "type": "Daemon",
      }
  expect(nChar).toEqual(result);
})