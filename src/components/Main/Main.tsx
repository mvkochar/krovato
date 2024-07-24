import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Catalog, Delivery, Home, Payment, Reviews } from '../../pages'

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
        <Route
          path='reviews'
          element={<Reviews/>}
        />
        <Route
          path='blog'
          element={<Blog/>}
        />
    </Routes>
  )
}

export default Main