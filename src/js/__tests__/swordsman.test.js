import Swordsman from '../swordsman';

test("Тест класса Swordsman", () => {
    const nChar = new Swordsman("nChar");
    const result = {
            "attack": 40,
            "defence": 10,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Swordsman",
          }

    expect(nChar).toEqual(result);
})

test("Тест метода levelUp класса Swordsman", () => {
  const nChar = new Swordsman("nChar");
  nChar.levelUp();

  const result = {
          "attack": 48,
          "defence": 12,
          "health": 100,
          "level": 2,
          "name": "nChar",
          "type": "Swordsman",
        }

  expect(nChar).toEqual(result);
})

test("Тест метода damage класса Swordsman", () => {
  const nChar = new Swordsman("nChar");
  nChar.damage(29);

  const result = {
        "attack": 40,
        "defence": 10,
        "health": 73.9,
        "level": 1,
        "name": "nChar",
        "type": "Swordsman",
      }
  expect(nChar).toEqual(result);
})

test("ошибки метода levelUp класса Swordsman", () => {
  expect(()=>{
    const nChar = new Swordsman("nChar");
    nChar.health = 0;
    nChar.levelUp();
  }).toThrowError('Нельзя повысить уровень умершего.');
})

test("Ошибка при длинне имени < 2", () => {
  expect(()=>{
    const nChat = new Swordsman("n")
  }).toThrowError('Не корректные данные')
})

test("Ошибка при длинне имени > 10", () => {
  expect(()=>{
    const nChat = new Swordsman("newCharacterBowerman")
  }).toThrowError('Не корректные данные')
})