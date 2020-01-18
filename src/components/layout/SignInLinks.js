import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authAction'

const SignInLinks = (props) => {
    const {initial} = props.profile;

    return (
        <ul className="right">
            <li><NavLink to='/create' className='btn btn-floating green darken-2 tooltipped' data-tooltip='New Blog'><i className="material-icons right">create</i>New Blog</NavLink></li>
            <li><NavLink to='/' onClick={props.signOut} className='btn btn-floating blue darken-1 tooltipped' data-tooltip='Log out'><i className="material-icons right">exit_to_app</i>Log Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1 tooltipped" data-tooltip='Profile'>{ initial }</NavLink></li>
        </ul>
    )
}

const mapStateToProps = (state)=>{
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signOut: ()=> dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks)
