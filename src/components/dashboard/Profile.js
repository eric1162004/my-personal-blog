import React, { Component } from 'react'
// import Notifications from './Notifications'
// import BlogList from '../blogs/BlogList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
// import {Redirect} from 'react-router-dom'

class Profile extends Component {
    render() {
        // const {blogs, auth, notifications} = this.props;

        return (
            <div className="profile section ">

                <div className="card hoverable">
                    <div className="card-image">
                        <img className='profile-img' src="img/profile.png" alt=''/>
                        <span className="card-title black-text center">Hi, My Name is Username!</span>
                    </div>

                    <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>

                    <div className="card-action grey darken-2">
                    <a href="/#" className='grey-text text-lighten-2'>This is a link</a>
                    </div>
                </div>
                
            </div>
             
        )
    }
}

// state = redux state
const mapStateToProps = (state) => {
    // console.log(state);
    
    return {
        blogs: state.firestore.ordered.blogs,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'blogs', limit:5, orderBy:['createAt', 'desc']},
        {collection:'notifications', limit:5, orderBy:['time', 'desc']}
    ])
)(Profile)