class TodoActions {
    static TODOS = "TODO";
    static TODOS_SUCCESSFULL = "TODO_SUCCESSFULL";
    static TODOS_FAILED = "TODO_FAILED";

    static getTodos(data) {
        return {
            type: TodoActions.TODOS,
            data
        }
    }

    static getTodosSuccessful(data) {
        return {
            type: TodoActions.TODOS_SUCCESSFULL,
            data
        }
    }

    static getTodosFailed(data) {
        return {
            type: TodoActions.TODOS_FAILED,
            data
        }
    }

}

export default TodoActions;