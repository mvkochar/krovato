import React from 'react'
import './css/Blog.css'
import PostsList from '../components/PostsList/PostsList'
import BlogItem from '../components/BlogItem/BlogItem'
import Features from '../components/Features/Features'

const Blog = () => {
    return (
       <>
         <div className="container-m">
            <h1 className="blog-title">Блог</h1>
            <div className="blog-content d-f jc-sb">
                {
                    PostsList.map((post) => {
                        return (
                            <BlogItem
                                id={post.id}
                                image={post.image}
                                title={post.title}
                            />
                        )
                    })
                }
            </div>
            <div className="blog-pagination d-f">
                <button className='blog-pagination-btn'><img src="/images/angle-left.png" alt="angle-left" /></button>
                <button className="blog-pagination-btn pagination-btn__active">1</button>
                <button className="blog-pagination-btn">2</button>
                <button className="blog-pagination-btn">3</button>
                <button className="blog-pagination-btn">4</button>
                <button className="blog-pagination-btn">5</button>
                <button className="blog-pagination-btn">6</button>
                <button className="blog-pagination-btn">7</button>
                <button className="blog-pagination-btn">...</button>
                <button className="blog-pagination-btn">18</button>
                <button className='blog-pagination-btn'><img src="/images/angle-right.png" alt="angle-right" /></button>
            </div>
            <button className='blog-more-btn'>Показати ще статті</button>
        </div>
        <Features/>
        <div style={{marginBottom: "40px"}}></div>
       </>
    )
}

export default Blog