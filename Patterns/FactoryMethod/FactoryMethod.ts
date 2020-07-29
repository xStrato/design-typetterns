import { Dialog, WinDialog, WebDialog } from './Dialog'

class FactoryMethod
{
  #dialog: Dialog;
  constructor(platform: string)
  {
    switch(platform)
    {
      case 'linux': this.#dialog = new WebDialog(); break;
      case 'Win32NT': this.#dialog = new WinDialog(); break;
      default: throw new Error("Unsupported system detected!");
    }

    this.#dialog.render(100, 200)
  }
}

const Application = (platform: string) => new FactoryMethod(platform)

export default Application;