import { IButton } from './Interfaces'
import { WinButton, HTMLButton } from './Buttons'

export abstract class Dialog
{
  abstract createButton(): IButton
  render(x: number, y: number): void
  {
    const okButton = this.createButton()
    okButton.render(x, y)
    okButton.onCLick("*Close Dialog*")
  }
}

export class WinDialog extends Dialog
{
  createButton(): IButton {
    return new WinButton()
  }
}

export class WebDialog extends Dialog
{
  createButton(): IButton {
    return new HTMLButton()
  }
}