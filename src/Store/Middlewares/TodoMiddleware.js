import TodoActions from "../Actions/TodoActions";


class TodoMiddleware {

    static getTodos() {
        return dispatch => {
            dispatch(TodoActions.getTodos())
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((resObj) => resObj.json())
                .then((res) => {
                    console.log(res);
                    
                    dispatch(TodoActions.getTodosSuccessful(res))
                })
                .catch(() => {
                    dispatch(TodoActions.getTodosFailed({ message: "Something Went Wrong" }))
                })
        }
    }

}


export default TodoMiddleware;