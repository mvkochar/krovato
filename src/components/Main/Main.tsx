import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Catalog, Contacts, Delivery, Home, Payment, Product, Reviews } from '../../pages'

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
        <Route
          path='contacts'
          element={<Contacts/>}
        />
       <Route
        path='product/:id'
        element={<Product />}
      />
    </Routes>
  )
}

export default Main