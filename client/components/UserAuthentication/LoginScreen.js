
const LoginScreen = () => {
    return(
        <div>
            Login here
        </div>
    )
}

export const LoginContainer = connect(
    null,
    dispatch => ({
        onLogin(username, password) {
            //dispatch(addPost(title, content))
        }
    })
)(AddPostForm)
