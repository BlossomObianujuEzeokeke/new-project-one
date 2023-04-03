import React, {useState, useEffect} from 'react'
import axios from 'axios'


const DataFetching = () => {
const [posts, setPosts] = useState([])

useEffect(() => { 
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then( res => { 
    console.log(res)
    setPosts(res.data)
})
.catch(err => {
  console.log(err)
})
})

  return (
    <div>
<ul>
  {
    posts.map(post => (
      <l1 key={post.id}>{post.title}</l1>
    ))
  }
</ul>
    </div>
  )
}

export default DataFetching