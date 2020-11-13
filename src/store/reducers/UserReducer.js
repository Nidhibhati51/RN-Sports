
import { CREATE_USER } from '../actions/UserAction';

const initialState = {
    UserData: []
};

export default (state = initialState, action) => {

    switch (action.type) {


        case CREATE_USER:


            return {
                ...state
            }
       
    }
    return state;
};

