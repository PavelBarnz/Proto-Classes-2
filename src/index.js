// eslint-disable-next-line import/extensions
import Bowerman from './js/bowerman.js';
// eslint-disable-next-line import/extensions
import Swordsman from './js/swordsman.js';
// eslint-disable-next-line import/extensions
import Magician from './js/magician.js';
// eslint-disable-next-line import/extensions
import Undead from './js/undead.js';
// eslint-disable-next-line import/extensions
import Zombie from './js/zombie.js';
// eslint-disable-next-line import/extensions
import Daemon from './js/daemon.js';

const person1 = new Bowerman('Person1');
const person2 = new Swordsman('Person2');
const person3 = new Magician('Person3');
const person4 = new Undead('Person4');
const person5 = new Zombie('Person5');
const person6 = new Daemon('Person6');

console.log(person1, person2, person3, person4, person5, person6);
