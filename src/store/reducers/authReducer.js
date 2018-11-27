const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCES':
            console.log('Signout succes')
            return {
                ...state,
            }
        case 'SIGNUP_SUCCESS':
            console.log('Signup succes')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Signup error')
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state;
    }
};

export default authReducer;