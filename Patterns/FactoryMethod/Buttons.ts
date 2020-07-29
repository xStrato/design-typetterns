import { IButton } from './Interfaces'

export class HTMLButton implements IButton
{
  render(x: number, y: number): void {
    console.log(`Setting HTML Button "x" to ${x} and "y" to ${y} (example)`)
  }

  onCLick(event: string): void {
    console.log(`Calls a natively HTML event: ${event}`)
  }
}

export class WinButton implements IButton
{
  render(x: number, y: number): void {
    console.log(`Setting Windows Button "x" to ${x} and "y" to ${y} (example)`)
  }

  onCLick(event: string): void {
    console.log(`Calls a natively Windows event: ${event}`)
  }
}