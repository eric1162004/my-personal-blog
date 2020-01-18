import React from 'react'
import moment from 'moment'

const BlogSummary = ({blog}) => {

    return (
        <div className="card z-depth-1 blog-summary hoverable">
            <div className="card-content grey-text text-darken-3">
                <i className="material-icons right" >chevron_right</i>
                <span className="card-title">{blog.title}</span>
                <p>Posted by {blog.authorFirstName} {blog.authorLastName}</p>
                <p className="grey-text">{moment(blog.createAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
    
}

export default BlogSummary