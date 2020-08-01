import CompoundGraphic, { Dot, Circle } from "./CompoundGraphic";
import { IGraphic } from "./IGraphic";

export default class ImageEditor
{
  #compoundGraphic: CompoundGraphic

  public constructor()
  {
    this.#compoundGraphic = new CompoundGraphic()
  }

  public load(): void
  {
    console.log(`Loading some Graphics for test`)
    this.#compoundGraphic.add(new Dot(100, 200))
    this.#compoundGraphic.add(new Circle(100, 400, 45))
  }

  public GroupSelected(components: Array<IGraphic>): void
  {
    const group = new CompoundGraphic()

    components.forEach(component => {
      console.log(`Updating list with new component ${component}`);
      group.add(component)
      console.log(`Removing from previous list the required component ${component}`);
      this.#compoundGraphic.remove(component)
    })

    this.#compoundGraphic.add(group)
    this.#compoundGraphic.draw()
  }
}