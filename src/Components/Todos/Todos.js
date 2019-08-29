import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoMiddleware from '../../Store/Middlewares/TodoMiddleware';
class Todos extends Component {

    state = {
        isLoading: false,
        errorMessage: "",
        todos: []
    }

    static getDerivedStateFromProps({
        isLoading,
        errorMessage,
        todos
    }) {
        return {
            isLoading,
            errorMessage,
            todos
        }
    }
    componentDidMount() {
        this.props.getTodos();
    }
    
    render() {
        const { todos, isLoading } = this.state;
        return (
            <div>
                {
                    isLoading ?
                        "Loading...." :
                        todos.map(({ title }, index) => (
                            <li key={index}>{title}</li>
                        ))
                }
            </div>
        )
    }
}

const mapStateToProps = ({
    todoReducer: { todos, isLoading, errorMessage }
}) => ({
    todos,
    isLoading,
    errorMessage
})

const mapDispatchToProps = (dispatch) => ({
    getTodos: (data) => dispatch(TodoMiddleware.getTodos(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Todos);
