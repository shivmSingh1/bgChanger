import { useState } from "react"
import "./App.css"
function App() {
  const [bgColor, setBgColor] = useState("violet")
  const redBg = () => {
    setBgColor("red")
  }
  const greenBg = () => {
    setBgColor("green")
  }
  const yellowBg = () => {
    setBgColor("yellow")
  }
  const blueBg = () => {
    setBgColor("blue")
  }
  const pinkBg = () => {
    setBgColor("pink")
  }
  const cyanBg = () => {
    setBgColor("cyan")
  }
  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="container">
        <div className="list">
        <div className="bgList">
          <button onClick={redBg} style={{ backgroundColor: "red" }} className="btn"> Red </button>
          <button onClick={greenBg} style={{ backgroundColor: "Green" }} className="btn"> Green </button>
          <button onClick={yellowBg} style={{ backgroundColor: "Yellow", color: "black" }} className="btn"> Yellow </button>
          <button onClick={blueBg} style={{ backgroundColor: "Blue" }} className="btn"> Blue </button>
          <button onClick={pinkBg} style={{ backgroundColor: "pink" , color:"Black" }} className="btn"> Pink </button>
          <button onClick={cyanBg} style={{ backgroundColor: "cyan", color:"black" }} className="btn"> Cyan </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
