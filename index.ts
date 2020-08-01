import AbstractFactory from './Patterns/AbstractFactory/AbstractFactory'
import FactoryMethod from './Patterns/FactoryMethod/FactoryMethod'
import Singleton from './Patterns/Singleton/Singleton'
import Composite from './Patterns/Composite/Composite'
import Adapter from './Patterns/Adapter/Adapter'

import os from 'os'

AbstractFactory(os.platform())
FactoryMethod(os.platform())
Singleton()
Adapter()
Composite()