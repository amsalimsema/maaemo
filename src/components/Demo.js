import React from 'react'
import { people } from './data'

export default function Demo() {
  return (
    <ul>
      {people.map((person) => {
        return (
          <li key={person.id}>
            {person.name} - {person.age} years old -{person.img}
          </li>
        )
      })}
    </ul>
  )
}
