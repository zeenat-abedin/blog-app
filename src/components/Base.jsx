import React from 'react'

function Base({children}) {
  return (
      <div className="container-fluid">
          <h1>This is a header</h1>
          {children}
          <h1>This is a footer</h1>
    </div>
  )
}

export default Base
