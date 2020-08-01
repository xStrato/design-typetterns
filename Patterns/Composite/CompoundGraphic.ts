import {IGraphic} from './IGraphic'

export default class CompoundGraphic implements IGraphic
{
  #children: Array<IGraphic>
  
  public constructor()
  {
    this.#children = Array<IGraphic>()
  }

  public add(child: IGraphic): void
  {
    this.#children.push(child);
  }

  public remove(child: IGraphic): void
  {
    const index = this.#children.indexOf(child)
    this.#children.splice(index, index)
  }

  public move(x: number, y: number): void 
  {
    this.#children.forEach(child => child.move(x ,y))
  }

  public draw(): void 
  {
    this.#children.forEach(child => child.draw())
  }
}


export class Dot implements IGraphic
{
  #x: number
  #y: number

  public constructor(x:number, y:number)
  {
    this.#x = x
    this.#y = y
  }

  public move(x: number, y: number): void {
    this.#x = x
    this.#y = y
  }
  
  public draw(): void {
    console.log(`Draws a Dot at X: ${this.#x} and Y: ${this.#y}`);
  }
}

export class Circle implements IGraphic 
{
  #x: number
  #y: number
  #radius: number

  public constructor(x:number, y:number, radius:number)
  {
    this.#x = x
    this.#y = y
    this.#radius = radius
  }

  public move(x: number, y: number): void 
  {
    this.#x = x
    this.#y = y
  }

  public draw(): void 
  {
    console.log(`Draws Circle at X: ${this.#x} and Y: ${this.#y} with Radius of ${this.#radius}`);
  }

  public changeSize(newRadius: number): void
  {
    this.#radius = newRadius
  }
}