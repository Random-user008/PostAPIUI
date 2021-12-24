import React from 'react'
import '../components/post.css'
import Form from '../components/form'
import { useEffect, useState } from 'react'
import axios from "axios";
const Post = (props) => {
    const i =0;
    const [data, setData] = useState([])
    const [up, setUp] = useState(0)
    //console.log(up)




    useEffect(() => {
        console.log("rendering");
        axios.get('https://optimistic-raman-85f69e.netlify.app/posts')
            .then((resposne) => {
                setData(resposne.data);
                console.log(resposne.data)
            })
            .catch((error) => {
                console.log(error)
            })
            document.getElementById('sub12').addEventListener('click',()=>{
                console.log('logging');
                setUp(i+1)
            })
            console.log(up)
    }, [up])
    return (
        <div>
            <div className='post'>
                <Form />
                <div className='content'>
                    <h1>Posts</h1>
                    {
                        data.map(posts => (
                            <div>
                                <h1>Title: {posts.title}</h1>
                                <h2>Author: {posts.author}</h2>
                                <p style={{ fontSize: '25px' }}>Content: {posts.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Post
