import React, { Component } from 'react'
import M from "materialize-css";

import Slider from '../layout/Slider'
import Pagination from '../layout/Pagination'
import Preloader from '../layout/Preloader'
import BlogList from '../blogs/BlogList'
import Profile from './Profile'

class VisitorBoard extends Component {
    state = {
        postsPerPage: 2,
        currentPage: 1,
        indexOfLastPost: 3,
        indexOfFirstPost: 0,
        currentBlogs: [],
    }
    
    paginate = (currentPage) => {
        const indexOfLastPost = currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        
        const allBlogs = this.props.blogs;
        const currentBlogs = allBlogs.slice(indexOfFirstPost, indexOfLastPost);
        
        return this.setState({
            ...this.state,
            currentPage,
            indexOfFirstPost,
            indexOfLastPost,
            currentBlogs,
        });
    }

    // To handle the inital render
    componentDidUpdate(){
        if (this.props.blogs && this.state.currentBlogs.length === 0){
            this.paginate(this.state.currentPage);
        }
    }

    componentDidMount(){
        var elems = document.querySelectorAll('.slider');
        M.Slider.init(elems);
    }

    render() {
        const {blogs} = this.props;   

        return (
            <div>
                <Slider/>

                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6 l7">
                            {blogs ? (
                                <div>
                                    <BlogList blogs={this.state.currentBlogs}/> 
                                    <Pagination
                                        currentPage={this.state.currentPage} 
                                        postsPerPage={this.state.postsPerPage} 
                                        totalPosts={blogs.length} 
                                        paginate={(currentPage)=> this.paginate(currentPage)}/>
                                </div>
                            ) : (
                                <Preloader />
                            )}
                        </div>

                        <div className="col s12 m6 l5">
                            <Profile/>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default VisitorBoard
