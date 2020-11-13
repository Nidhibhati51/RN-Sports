export const CREATE_USER = "CREATE_USER";
import baseUrl from "../../constants/baseUrl"; 


export const createUser = (email, password, displayname,userType) => {
  return async (dispatch) => {
    const response = await fetch(baseUrl.url + "users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        displayname,
        userType,
        
      }),
    });

    const resData = await response.json();
    //console.log(resData);

    dispatch({
      type: CREATE_USER,
      userdata: resData,
    });
  };
};
