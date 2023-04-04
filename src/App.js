import './App.css';
import React, { useState } from 'react';
import { Movible } from './moveable/Movible';

function App() {
  const [position, setPosition] = useState({x: "750", y: "200"})
  const [size, setSize] = useState({width: "200px", height: "200px"})
  const [rotation, setRotation] = useState(0)
  const onDrag = (e) => {
    e.target.style.transform = e.transform
    setPosition({x: `${(e.translate[0] + 750)}`, y: `${(e.translate[1] + 200)}`})
  }
  const onResize = (e) => {
    e.target.style.width = `${e.width}px`
    e.target.style.height = `${e.height}px`
    e.target.style.transform = e.drag.transform
    if (e.direction[0] == 1 || e.direction[1] == 1) {
      setSize({width: `${e.width}px`, height: `${e.height}px`})
    }
    if (e.direction[0] == -1 || e.direction[1] == -1) {
      setSize({width: `${e.width}px`, height: `${e.height}px`})
      setPosition({x: `${(e.drag.translate[0] + 750)}`, y: `${(e.drag.translate[1] + 200)}`})
    }
  }
  const onRotate = (e) => {
    console.log(e.target.style.transform)
    e.target.style.transform = e.drag.transform
    setRotation(e.rotate)
  }
  return (
    <div>
      <Movible
        position={position}
        size={size}
        rotation={rotation}
        onDrag={onDrag}
        onResize={onResize}
        onRotate={onRotate}
      ></Movible>
    </div>
  )
}

export default App;
