import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS } from './constants';


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
return async (dispatch) => {
    dispatch(markLoading());
   const response = await fetch('https://api-jfdzl2.herokuapp.com/api/v1/users/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    if (response.status >= 200 && response.status < 300) {
        const responseData = await response.json();
        dispatch(populateUserData(responseData));
    } else {
            dispatch(markError())
        }
    }
}





