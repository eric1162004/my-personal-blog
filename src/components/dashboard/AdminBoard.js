import React from 'react'

import Notifications from './Notifications'
import BlogList from '../blogs/BlogList'

export default function AdminBoard({blogs, notifications}) {
    return (
        <div className="dashboard container">
            <div className="row">
                {/* Blog List */}
                <div className="col s12 m6">
                    <BlogList blogs={blogs}/>
                </div>

                {/* Notification List */}
                <div className="col s12 m5 offset-m1">
                    <Notifications notifications={notifications}/>
                </div>
            </div>
        </div>
    )
}
