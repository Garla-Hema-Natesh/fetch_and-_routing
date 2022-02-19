import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogsDetails: {}}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)

    const data = await response.json()

    const UpadatedBlogDetails = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }

    this.setState({blogsDetails: UpadatedBlogDetails})
  }

  render() {
    const {blogsDetails} = this.state
    const {author, avatarUrl, content, imageUrl, title, topic} = blogsDetails
    return (
      <div className="blogDetails-container">
        <h1>{title}</h1>
        <div className="author-container">
          <img src={avatarUrl} className="avatar-image" alt={imageUrl} />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="image-style" />
        <p className="content">{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
