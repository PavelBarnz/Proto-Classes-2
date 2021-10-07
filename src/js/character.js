/* eslint-disable no-unused-vars */
// eslint-disable-next-line max-classes-per-file
export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Не корректные данные');
    } else {
      this.name = name;
    }

    this.attack = 0;
    this.defence = 0;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) throw new Error('Нельзя повысить уровень умершего.');

    this.level += 1;
    this.attack += (this.attack / 100) * 20;
    this.defence += (this.defence / 100) * 20;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Персонаж мертв.');
    }
  }
}
