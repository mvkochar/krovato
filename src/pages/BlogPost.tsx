import React from 'react'
import "./css/BlogPost.css"
import { Link, useParams } from 'react-router-dom'
import PostsList from '../components/PostsList/PostsList'
import Features from '../components/Features/Features'

const BlogPost = () => {
    const { id } = useParams<string>()
    let a = id ? id : '0'
    let index = parseInt(a)
    const currentPost = PostsList[index]

    let prevId = index > 0 ? index - 1 : 0
    let nextId = index < PostsList.length - 1 ? index + 1 : PostsList.length - 1

    return (
        <>
            <h1 className="post-title">{currentPost.title}</h1>
            <div className='post-img'><img src={currentPost.image} alt="post" width={1070} height={380} /></div>
            <p className="post-desc">{currentPost.description}</p>
            <div className="post-actions d-f">
                <Link to={`/post/${prevId}`}>Попередня стаття</Link>
                <Link to={`/post/${nextId}`}>Наступна стаття</Link>
            </div>
            <Features />
            <div style={{ marginBottom: "40px" }}></div>
        </>
    )
}

export default BlogPost