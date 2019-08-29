import TodoActions from "../Actions/TodoActions";
import { pending, apiResponded } from "./GeneralState";

const initialState = {
    isLoading: false,
    isErorr: false,
    errorMessage: '',
    todos: []
};

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case TodoActions.TODOS:
            return {
                ...state,
                ...pending()
            }


        case TodoActions.TODOS_SUCCESSFULL:
            console.log('action.data',action.data);
                
        return {
                ...state,
                ...apiResponded(false, ''),
                todos: action.data
            }


        case TodoActions.TODOS_FAILED:
            return {
                ...state,
                ...apiResponded(true, 'Something Went Wrong!!!'),
            }

        default:
            return state
    }
};

export default todoReducer;