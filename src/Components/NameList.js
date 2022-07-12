import React from 'react'
import Person from './Person'

function NameList() {

  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']

  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 29,
      skill: 'Bat stuff'
    },
    {
      id: 2, 
      name: 'Clark',
      age: 24,
      skill: 'Flying'
    },
    {
      id: 3,
      name: 'Diana',
      age: 26,
      skill: 'Lasso'
    }
  ]

  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return <div>{nameList}</div>


  // const names = ['Bruce', 'Clark', 'Diana']
  // const nameList = names.map(name => <h2>{name}</h2>)
  // return <div>{nameList}</div>
}

export default NameList