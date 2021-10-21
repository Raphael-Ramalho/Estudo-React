import React, { useEffect } from 'react'

const Post = () => {
    const [post, setPost] = useState({}) 

    useEffect(()=>{
        busca(`/posts/${id}`, setPost)
    },[input])

    return(

    )
}

export default Post