// eslint-disable-next-line import/extensions
import Character from './character.js';

export default class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
