import React from 'react'

function Count({text,count,}) {
    console.log(` ${text} render`)
  return (
    <div>
        <h5>{text} -{count}</h5>
    </div>
  )
}

export default React.memo(Count)