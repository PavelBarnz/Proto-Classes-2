import Bowerman from '../bowerman';

test("Тест класса Bowerman", () => {
    const nChar = new Bowerman("nChar");
    const result = {
            "attack": 25,
            "defence": 25,
            "health": 100,
            "level": 1,
            "name": "nChar",
            "type": "Bowerman",
          }

    expect(nChar).toEqual(result);
})

test("Тест метода levelUp класса Bowerman", () => {
  const nChar = new Bowerman("nChar");
  nChar.levelUp();

  const result = {
          "attack": 30,
          "defence": 30,
          "health": 100,
          "level": 2,
          "name": "nChar",
          "type": "Bowerman",
        }

  expect(nChar).toEqual(result);
})

test("Тест метода damage класса Bowerman", () => {
  const nChar = new Bowerman("nChar");
  nChar.damage(52);

  const result = {
        "attack": 25,
        "defence": 25,
        "health": 61,
        "level": 1,
        "name": "nChar",
        "type": "Bowerman",
      }
  expect(nChar).toEqual(result);
})

test("ошибки метода levelUp класса Bowerman", () => {
  expect(()=>{
    const nChar = new Bowerman("nChar");
    nChar.health = 0;
    nChar.levelUp();
  }).toThrowError('Нельзя повысить уровень умершего.');
})

test("Ошибка при длинне имени < 2", () => {
  expect(()=>{
    const nChat = new Bowerman("n")
  }).toThrowError('Не корректные данные')
})

test("Ошибка при длинне имени > 10", () => {
  expect(()=>{
    const nChat = new Bowerman("newCharacterBowerman")
  }).toThrowError('Не корректные данные')
})