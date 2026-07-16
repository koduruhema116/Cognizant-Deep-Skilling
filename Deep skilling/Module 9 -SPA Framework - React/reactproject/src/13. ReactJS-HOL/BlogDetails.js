import React from "react";

class BlogDetails extends React.Component {
    render(){
        const blogs = [
            {
                id: 1,
                title: "React Hooks",
                author: "Alex"
            },
            {
                id: 2,
                title: "JavaScript ES6",
                author: "Robert"
            }
        ];

        return (
            <div>
                <h2>Blog Details</h2>

                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            <b>{blog.title}</b> - {blog.author}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BlogDetails;