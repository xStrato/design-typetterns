import { IButton, ICheckbox , IGUIFactory } from './Interfaces'

class WinButton implements IButton
{
  paint(): void {
    console.log("Painted a Windows Button")
  }
}

class WinCheckbox implements ICheckbox
{
  paint(): void {
    console.log("Painted a Windows Checkbox")
  }
}

export default class WinFactory implements IGUIFactory
{
  createButton(): IButton {
    return new WinButton()
  }
  createCheckbox(): ICheckbox {
    return new WinCheckbox()
  }
}