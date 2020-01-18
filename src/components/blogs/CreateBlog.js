import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {createBlog} from '../../store/actions/blogActions'
import TextEditor from '../layout/TextEditor'

class CreateBlog extends Component {
    state = {
        title: '',
        content:'',
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.title === '' || this.state.content ===''){
            document.querySelector('.submitError').style.display = 'block';
            return;
        }
        
        this.props.createBlog(this.state);

        this.props.history.push('/');
    }

    handleEditorInput = (content) => {
        this.setState({
            ...this.state,
            content,
        });
    }

    render() {
        const {auth} = this.props;

        if (!auth.uid) return <Redirect to='signin'/>

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Blog</h5>
                    

                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>

                    <TextEditor handleEditorInput={(content) => this.handleEditorInput(content)}/>

                    <div className='center submitError' style={{color:'red', margin:'10px', display:'none'}}>
                        Some fields are blank.
                    </div>

                    <div className="input-field">
                        <button className="btn waves-effect waves-light pink lighten-1 z-depth-0" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBlog: (blog) => dispatch(createBlog(blog))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlog)
