import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {title, avatarUrl, topic, imageUrl, author, id} = blogData

  return (
    <Link to={`/blogs/${id}`} className="link-style">
      <div className="blogContainer">
        <img src={imageUrl} className="image" />
        <div className="blog-content">
          <p>{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-container">
            <img src={avatarUrl} className="author" />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
