import React from 'react'

function Button({children,increment}) {
    console.log(`increment ${children} render`)
  return (
    <div>
        <button onClick={increment}>{children}</button>
    </div>
  )
}

export default React.memo(Button)