// eslint-disable-next-line import/extensions
import Character from './character.js';

export default class Bowerman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}
