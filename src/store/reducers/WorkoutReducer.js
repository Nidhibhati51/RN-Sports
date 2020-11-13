import { CREATE_WORKOUT,SET_WORK_OUT ,DELETE_WORKOUT} from "../actions/WorkoutAction";

const initialState = {
    WorkoutData: []
};

export default (state = initialState, action) => {

    switch (action.type) {


        case CREATE_WORKOUT:


            return {
                ...state
            }
            
            case SET_WORK_OUT:


            return {
                ...state,WorkoutData:action.Workoutdata
            } 
             case DELETE_WORKOUT:


            return {
                ...state
            }
       
    }
    return state;
};
// 
   

