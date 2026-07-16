import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            posts:[]
        }
    }
    loadPosts(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then((data)=>{
            const posts = data.map(
                item => new Post(item.id,item.title,item.body)
            )
            this.setState({
                posts: posts
            })
        })
    }
    componentDidMount(){
        this.loadPosts()
    }
    componentDidCatch(error){
        alert(error)
        console.log(error)
    }
    render(){
        return(
            <div>
                <h1>Posts</h1>
                {this.state.posts.map(post=>{
                    return(
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Posts;