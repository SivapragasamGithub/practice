import React, { useEffect, useState } from 'react'

function Home() {
  const [Counter, setCounter] = useState(0)
  useEffect(() => {
    console.log("on mount2");

  }, [])
  useEffect(() => {
    console.log("on counter state Change");

  }, [Counter])

  useEffect(() => {
    return (() => {
      console.log("on destroy");

    })
  })

  let inc = () => {
    setCounter(Counter + 1)
  }
  return (
    <div>
      <div>Home</div> - {Counter}
      <button onClick={ inc }>  +</button>
    </div>
  )
}

export default Home