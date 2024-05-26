import React from 'react'

const Text = ({text, value}) => {
  console.log(`${text} Rendering`)
  return (
    <div>
      <p>{text} - {value}</p>
    </div>
  )
}

export default React.memo(Text)