import { IButton, ICheckbox, IGUIFactory } from './Interfaces'
import UnixFactory from './UnixFactory'
import WinFactory from './WinFactory'

class AbstractFactory
{
  #factory: IGUIFactory
  #button: IButton | null
  #checkbox: ICheckbox | null

  public constructor(factory: IGUIFactory)
  {
    this.#factory = factory
    this.#button = null
    this.#checkbox = null
  }
  public createUI(): void
  {
    this.#button = this.#factory.createButton()
    this.#checkbox = this.#factory.createCheckbox()
  }

  public paint()
  {
    if (this.#button == null || this.#checkbox == null)
    {
      throw new Error("UI components should be created first")
    }
    this.#button.paint()
    this.#checkbox.paint()
  }
}

const Application = (platform: string): void => {
  
  console.log("*AbstractFactory*")
  let factory: IGUIFactory

  switch(platform)
  {
    case 'linux': factory = new UnixFactory(); break;
    case 'Win32NT': factory = new UnixFactory(); break;
    default: throw new Error("Unsupported system detected!");
  }
  const app = new AbstractFactory(factory);
  app.createUI()
  app.paint()
}

export default Application;