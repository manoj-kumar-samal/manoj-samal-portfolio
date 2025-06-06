import React from 'react'
import "./TechCube.css"

function TechCube() {
  return (
    <div className="cube-scene">
      <div className="cube">
        <div className="face front">React</div>
        <div className="face back">Node</div>
        <div className="face left">MongoDB</div>
        <div className="face right">Express</div>
        <div className="face top">Tailwind</div>
        <div className="face bottom">GitHub</div>
      </div>
    </div>
  )
}

export default TechCube
