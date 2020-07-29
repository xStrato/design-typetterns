import { IButton, ICheckbox, IGUIFactory } from './Interfaces'

class UnixButton implements IButton
{
  paint(): void {
    console.log("Painted a Unix Button")
  }
}

class UnixCheckbox implements ICheckbox
{
  paint(): void {
    console.log("Painted a Unix Checkbox")
  }
}

export default class UnixFactory implements IGUIFactory
{
  createButton(): IButton {
    return new UnixButton()
  }
  createCheckbox(): ICheckbox {
    return new UnixCheckbox()
  }
}