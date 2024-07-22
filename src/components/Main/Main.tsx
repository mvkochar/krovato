import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Catalog, Delivery, Home, Payment } from '../../pages'

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
        <Route
          path='payment'
          element={<Payment/>}
        />
        <Route
          path='delivery'
          element={<Delivery/>}
        />
    </Routes>
  )
}

export default Main