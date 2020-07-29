export interface IButton
{
  paint(): void
}

export interface ICheckbox
{
  paint(): void
}
export interface IGUIFactory
{
  createButton(): IButton
  createCheckbox(): ICheckbox
}