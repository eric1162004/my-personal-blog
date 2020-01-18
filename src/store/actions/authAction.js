export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'});
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR', err});
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type:'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=>{
            const firstName = newUser.firstName[0].toUpperCase() + newUser.firstName.slice(1);
            const lastName = newUser.lastName[0].toUpperCase() + newUser.lastName.slice(1);

            return firestore.collection('users').doc(res.user.uid).set({
                firstName,
                lastName,
                initial: firstName[0] + lastName[0]
            }).then(()=>{
                dispatch({type: 'SIGNUP_SUCCESS'});
            })
        }).catch(err =>{
            dispatch({type: 'SIGNUP_ERROR', err});
        })

    }
}