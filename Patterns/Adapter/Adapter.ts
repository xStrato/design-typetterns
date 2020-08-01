import { RoundHole, RoundPeg } from "./RoundComponents"
import { SquarePeg } from "./SquareComponents"
import SquarePegAdapter from "./SquarePegAdapter"

const Adapter = (): void => {
  console.log("\n*Adapter*")

  const hole = new RoundHole(5);
  const peg = new RoundPeg(5);
  console.log(`The "Round peg" fits the round hole?: ${hole.fits(peg)}`)

  var smallSqPeg = new SquarePeg(5);
  var largeSqPeg = new SquarePeg(10);

  // hole.fits(smallSqPeg); /// Comp error because there's any adapter yet

  var smallSqPegAdapter = new SquarePegAdapter(smallSqPeg);
  var largeSqPegAdapter = new SquarePegAdapter(largeSqPeg);
  console.log(`The adapted small "Square peg" fits the round hole?: ${hole.fits(smallSqPegAdapter)}`)
  console.log(`The adapted large "Square peg" fits the round hole?: ${hole.fits(largeSqPegAdapter)}`)
  console.log()
}

export default Adapter;