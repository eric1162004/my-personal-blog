import React, { Component } from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
// import {Redirect} from 'react-router-dom'

import AdminBoard from './AdminBoard'
import VisitorBoard from './VisitorBoard'
import { AuthIsLoaded } from '../../hoc/auth/authIsLoaded'

class Dashboard extends Component {
    
    render() {
        const {blogs, auth, notifications} = this.props;

        const display = (auth.uid) ? 
            <AdminBoard blogs={blogs} notifications={notifications}/>:
            <VisitorBoard blogs={blogs} />

        return <AuthIsLoaded>{display}</AuthIsLoaded>
    }
}

// state = redux state
const mapStateToProps = (state) => {
    return {
        blogs: state.firestore.ordered.blogs,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'blogs', limit:50, orderBy:['createAt', 'desc']},
        {collection:'notifications', limit:5, orderBy:['time', 'desc']}
    ])
)(Dashboard)