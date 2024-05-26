import React from 'react'

const Title = () => {
  console.log("Title Rendering")
  return (
    <div>
      <h1>useCallBack Hook</h1>
    </div>
  )
}

export default React.memo(Title)