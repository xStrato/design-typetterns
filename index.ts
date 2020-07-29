import AbstractFactory from './Patterns/AbstractFactory/AbstractFactory'
import FactoryMethod from './Patterns/FactoryMethod/FactoryMethod'

import os from 'os'

AbstractFactory(os.platform())
FactoryMethod(os.platform())