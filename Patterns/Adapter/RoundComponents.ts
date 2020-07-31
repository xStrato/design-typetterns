export class RoundPeg
{
  #radius: number
  constructor(radius: number)
  {
    this.#radius = radius
  }

  get radius(): number
  {
    return this.#radius
  }
}

export class RoundHole
{
  #radius: number
  constructor(radius: number)
  {
    this.#radius = radius
  }
  public fits(roundPeg: RoundPeg): boolean
  {
    return this.#radius >= roundPeg.radius
  }
}
