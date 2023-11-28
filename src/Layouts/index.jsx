import React from 'react'
import Header from '../Shared/Header'

const Layouts = ({children}) => {
  return (
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layouts
