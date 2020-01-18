
export const createBlog = (blog) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        
        firestore.collection('blogs').add({
            ...blog,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }).then(()=>{
            //resume dispatch
            dispatch({
                type:'CREATE_BLOG', 
                blog
            });

        }).catch((err)=>{
            dispatch({
                type:"CREATE_BLOG_ERROR",
                err
            });
        })

    }
}

export const deleteBlog = (blogId) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        
        const firestore = getFirestore();

        firestore.collection('blogs').doc(blogId).delete().then(()=>{
            dispatch({
                type:'DELETE_BLOG', 
                blogId
            });
        }).catch((err)=>{
            dispatch({
                type:"DELETE_BLOG_ERROR",
                err
            });
        })

    }
}