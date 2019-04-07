import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from './constants';


export const populateUserData = (apiData) => ({
    type: REGISTER_SUCCESS,
    user: apiData
});

export const markError = () => ({
    type: REGISTER_FAIL
});

export const markLoading = () => ({
    type: REGISTER_REQUEST
});

export const registerUser = (formData) => {
return dispatch => {
    dispatch(markLoading());
    fetch('https://api-jfdzl2.herokuapp.com/api/v1/users/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(responseData => {
            dispatch(populateUserData(responseData))
        })
        .catch(error => {
            dispatch(markError());
        })
}
}



