//import Spaceship from "./spaceship";
//import spaceship_engine from "./spaceship_engine";

const Spaceship = require("./spaceship")
const spaceship_engine = require('./spaceship_engine')

const shophia = new Spaceship('Shophia', 10, 5)
const amsterda = new Spaceship('Amsterdã', 14, 10)
const dwarfStart = new Spaceship('Estrela-Anã', 20, 4)

const shophiaEngine = new spaceship_engine(shophia)
const amsterdaEngine = new spaceship_engine(amsterda)
const dwarfStartEngine = new spaceship_engine(dwarfStart)

shophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfStartEngine.turnOn()

console.log('Promises')