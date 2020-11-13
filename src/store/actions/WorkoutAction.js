export const CREATE_WORKOUT = "CREATE_WORKOUT";
export const SET_WORK_OUT = "SET_WORK_OUT";
export const DELETE_WORKOUT = "DELETE_WORKOUT";
import baseUrl from "../../constants/baseUrl";

export const createWorkout = (Exercise, Sets, Reps,Tempo,Rest) => {
  return async (dispatch) => {
    const response = await fetch(baseUrl.url + "AddTrainings/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Exercise,
        Sets,
        Reps,
        Tempo,
        Rest,
        userId:'5faa0224ecc09b31b03d93af'
      }),
    });

    const resData = await response.json();
   // console.log(resData);

    dispatch({
      type: CREATE_WORKOUT,
      Workoutdata: resData,
    });
  };
};



export const getWorkoutsByCoach = (user) => {
  return async (dispatch) => {
    const response = await fetch(baseUrl.url + "AddTrainings/getWorkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       
        user
      }),
    });

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: SET_WORK_OUT,
      Workoutdata: resData,
    });
  };
};


// export const deleteWorkout = (userId) => {
//   console.log('here')
//   return async (dispatch) => {
//     const response = await fetch(baseUrl.url + `AddTrainings/:${userId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
       
//         userId
//       }),
//     });/// thode time tk aya


//     const resData = await response.json();
//     console.log(resData);

//     dispatch({
//       type: DELETE_WORKOUT,
//       Workoutdata: resData,
//     });
//   };
// };


// export const deleteWorkout = (userId) => {
//   console.log(userId)
//   return async (dispatch) => {
//     const response = await fetch('http://192.168.0.12:5000/AddTrainings/test', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // body: JSON.stringify({
       
//       //   userId
//       // }),
//     });/// thode time tk aya


//     const resData = await response.json();
//     console.log(resData);

//     dispatch({
//       type: DELETE_WORKOUT,
//       Workoutdata: resData,
//     });
//   };
// };


export const deleteWorkout = (UserId) => {
  return async dispatch => {

      const response = await fetch('http://192.168.0.12:5000/AddTrainings/test', {
          method: 'POST'
      });

      const resData = await response.json();


      dispatch({
          type: CREATE_USER, userdata: resData
      });
  };
};