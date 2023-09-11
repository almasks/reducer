import React, { useContext } from 'react'
import { UserContext } from '../App'

function CompC() {
    const user=useContext(UserContext)

  return (
        <div>
            {user } heyyy
        </div>
  )
}

export default CompC