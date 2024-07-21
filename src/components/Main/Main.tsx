import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Catalog, Home } from '../../pages'

const Main = () => {
  return (
    <Routes>
        <Route 
            path='/'
            element={<Home/>}
        />
        <Route
          path='catalog'
          element={<Catalog/>}
        />
        <Route
          path='about'
          element={<About/>}
        />
    </Routes>
  )
}

export default Main