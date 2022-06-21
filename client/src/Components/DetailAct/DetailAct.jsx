import React from 'react'

export default function DetailAct({id, name , difficulty, duration, season}) {
  return (
        <div key={id}>
            <span>{name}</span>
            <span>{difficulty}</span>
            <span>{duration}</span>
            <span>{season}</span>
        </div>
  )
}
