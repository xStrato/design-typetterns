import AbstractFactory from './Patterns/AbstractFactory/AbstractFactory'
import FactoryMethod from './Patterns/FactoryMethod/FactoryMethod'
import Singleton from './Patterns/Singleton/Singleton'

import os from 'os'

console.log("*AbstractFactory*")
AbstractFactory(os.platform())

console.log("\n*FactoryMethod*")
FactoryMethod(os.platform())

console.log("\n*Singleton*")
Singleton()
