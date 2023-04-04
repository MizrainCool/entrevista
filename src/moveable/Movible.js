import React, { useEffect, useRef, useState } from "react";
import Moveable from "react-moveable";

export const Movible = (
  {
    position,
    size,
    rotation,
    onDrag,
    onResize,
    onRotate,
  }
) => {
  const targetRef = useRef()
  return (
    <div className="root">
      <img
        src="https://via.placeholder.com/200x200.png?text=Move+me!"
        width={size?.width}
        height={size?.height}
        style={{transform: `translate(${position?.x}px, ${position?.y}px) rotate(${rotation}deg)`}}
      />
      <div className="container">
        <div
          className="target"
          ref={targetRef}
          style={{transform: "translate(0px, 0px) rotate(0deg)"}}
        >
        </div>
        <Moveable
          target={targetRef}
          draggable={true}
          resizable={true}
          rotatable={true}
          edge={true}
          //
          throttleDrag={1}
          throttleScale={0}
          throttleRotate={0}
          //
          origin={false}
          keepRatio={false}
          renderDirections={["nw","ne","sw","se"]}
          rotationPosition={"top"}
          //
          onDrag={onDrag}
          onResize={onResize}
          onRotate={onRotate}
        />
      </div>
    </div>
  );
}
