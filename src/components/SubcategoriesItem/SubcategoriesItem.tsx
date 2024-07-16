import React from 'react'
import './SubcategoriesItem.css'

type SubcategoriesItemProps = {
    image: string
    title: string
}

const SubcategoriesItem = ({image, title}:SubcategoriesItemProps) => {
  return (
    <div className='subcategories-item' style={{background: `#fff url('${image}') no-repeat`}}>
        <div className="subcategories-item-line"></div>
        <h5 className="subcategories-item-title">{title}</h5>
    </div>
  )
}

export default SubcategoriesItem