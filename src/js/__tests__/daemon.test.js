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

test("ошибки метода levelUp класса Daemon", () => {
  expect(()=>{
    const nChar = new Daemon("nChar");
    nChar.health = 0;
    nChar.levelUp();
  }).toThrowError('Нельзя повысить уровень умершего.');
})

test("Ошибка при длинне имени < 2", () => {
  expect(()=>{
    const nChat = new Daemon("n")
  }).toThrowError('Не корректные данные')
})

test("Ошибка при длинне имени > 10", () => {
  expect(()=>{
    const nChat = new Daemon("newCharacterBowerman")
  }).toThrowError('Не корректные данные')
})