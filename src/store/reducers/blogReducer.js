const initState = {
    blogs: [
        {id:'1', title:'title 1', content:'some content here...'},
        {id:'2', title:'title 2', content:'some content here...'},
        {id:'3', title:'title 3', content:'some content here...'},
    ]
}

const blogReducer = (state=initState, action)=>{
    switch(action.type){
        case 'CREATE_BLOG':
            console.log('created blog', action.blog);
            return state;

        case 'CREATE_BLOG_ERROR':
            console.log('Create blog error', action.err);
            return state;

        case 'DELETE_BLOG':
        console.log('Deleted blog', action.blog);
        return state;

        case 'DELETE_BLOG_ERROR':
            console.log('Delete blog error', action.err);
            return state;
        
        default:
            return state;
    }
}

export default blogReducer