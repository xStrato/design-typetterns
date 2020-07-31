export class SquarePeg
{
  #width: number
  constructor(width: number)
  {
    this.#width = width
  }

  get width(): number 
  {
    return this.#width
  }
}