import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogList: []}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(each => ({
      author: each.author,
      id: each.id,
      avatarUrl: each.avatar_url,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({blogList: updatedData})
  }

  render() {
    const {blogList} = this.state

    return blogList.map(eachItem => (
      <BlogItem blogData={eachItem} key={eachItem.id} />
    ))
  }
}

export default BlogList
