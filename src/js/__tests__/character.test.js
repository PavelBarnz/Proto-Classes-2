import Character from '../character.js';
import Bowerman from '../character.js';

test("Тест класса Character", () => {
    const nChar = new Character("nChar");
    const result = {
            "health": 100,
            "level": 1,
            "name": "nChar",
          }

    expect(nChar).toEqual(result);
})

test("Тест метода damage класса Character", () => {
  expect(()=>{
    const nChar = new Character("nChar");
    nChar.health = 0;
    nChar.damage(52);
  }).toThrowError('Персонаж мертв.');
})

test("ошибки метода levelUp класса Сharacter", () => {
  expect(()=>{
    const nChar = new Character("nChar");
    nChar.health = 0;
    nChar.levelUp();
  }).toThrowError('Нельзя повысить уровень умершего.');
})

test("Ошибка при длинне имени < 2", () => {
  expect(()=>{
    const nChat = new Character("n")
  }).toThrowError('Не корректные данные')
})

test("Ошибка при длинне имени > 10", () => {
  expect(()=>{
    const nChat = new Character("newCharacterBowerman")
  }).toThrowError('Не корректные данные')
})