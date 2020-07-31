import { RoundPeg } from "./RoundComponents";
import { SquarePeg } from "./SquareComponents";

export default class SquarePegAdapter extends RoundPeg
{
  #squarePeg: SquarePeg
  constructor(squarePeg: SquarePeg)
  {
    super(0)
    this.#squarePeg = squarePeg
  }
  get radius(): number
  {
    return this.#squarePeg.width * Math.sqrt(2) / 2
  }
}