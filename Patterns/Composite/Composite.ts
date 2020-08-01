import ImageEditor from "./ImageEditor";
import CompoundGraphic, { Dot, Circle } from "./CompoundGraphic";
import { IGraphic } from "./IGraphic";

const Composite = () => {
  console.log("\n*Composite*")
  const imageEditor = new ImageEditor()
  imageEditor.load()
  const arr = new Array<IGraphic>()
  arr.push(new Dot(200, 100))
  arr.push(new Dot(200, 200))
  arr.push(new Dot(200, 300))
  arr.push(new Circle(200, 100, 45))
  arr.push(new Circle(200, 200, 90))
  arr.push(new Circle(200, 300, 180))
  imageEditor.GroupSelected(arr)
}

export default Composite