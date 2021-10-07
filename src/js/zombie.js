// eslint-disable-next-line import/extensions
import Character from './character.js';

export default class Zombie extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
