import Zombie from '../zombie';

test("Тест класса Zombie", () => {
    const nChar = new Zombie("nChar");
    const result = {
            "attack": 40,
            "defence": 10,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Zombie",
          }

    expect(nChar).toEqual(result);
})

test("Тест метода levelUp класса Zombie", () => {
  const nChar = new Zombie("nChar");
  nChar.levelUp();

  const result = {
          "attack": 48,
          "defence": 12,
          "health": 100,
          "level": 2,
          "name": "nChar",
          "type": "Zombie",
        }

  expect(nChar).toEqual(result);
})

test("Тест метода damage класса Zombie", () => {
  const nChar = new Zombie("nChar");
  nChar.damage(45);

  const result = {
        "attack": 40,
        "defence": 10,
        "health": 59.5,
        "level": 1,
        "name": "nChar",
        "type": "Zombie",
      }
  expect(nChar).toEqual(result);
})

test("ошибки метода levelUp класса Zombie", () => {
  expect(()=>{
    const nChar = new Zombie("nChar");
    nChar.health = 0;
    nChar.levelUp();
  }).toThrowError('Нельзя повысить уровень умершего.');
})

test("Ошибка при длинне имени < 2", () => {
  expect(()=>{
    const nChat = new Zombie("n")
  }).toThrowError('Не корректные данные')
})

test("Ошибка при длинне имени > 10", () => {
  expect(()=>{
    const nChat = new Zombie("newCharacterBowerman")
  }).toThrowError('Не корректные данные')
})