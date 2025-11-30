'use client'

import { useReducer } from "react"

function reducer (state, action){
  switch (action.type){
    case "action1":
        return [...state, action.payload]
  }
}

export default function App(){
  const [state, dispatch] = useReducer(reducer, ['1', '2', '3'])

  function add(num){
    dispatch({
        type: 'action1',
        payload: num,
    })
  }

  console.log(state)
  return(
    <></>
  )
}
