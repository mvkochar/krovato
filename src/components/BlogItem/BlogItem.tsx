import React from 'react'
import './BlogItem.css'

type BlogItemProps = {
    id: number
    image: string
    title: string
}

const BlogItem = ({ id, image, title }: BlogItemProps) => {
    return (
        <div className='blog-item d-f jc-sb'>
            <div><img src={image} alt="blog-item"/></div>
            <h3 className="blog-item-title">{title}</h3>
            <div className="blog-item-more d-f">
                <h5 className="item-more-title">Детальніше</h5>
                <a href=""><img src="/images/upper-right.png" alt="upper-right" /></a>
            </div>
        </div>
    )
}

export default BlogItem