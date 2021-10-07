// eslint-disable-next-line import/extensions
import Character from './character.js';

export default class Daemon extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
