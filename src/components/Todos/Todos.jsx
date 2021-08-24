import React, { useEffect, useState } from 'react'
import TodoCard from "./TodoCard/TodoList";
import TodoForm from "./TodoForm/TodoForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../actions/todoActions";
import {
    Modal
} from "@material-ui/core";
import stylesheet from "./todos-styles";

const Todos = () => {
    const styles = stylesheet();

    const todos = useSelector((state) => {
        return state.todos;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [todos]);

    const [showFormState, setShowFormState] = useState(false);

    const toggleForm = () => {
        setShowFormState(!showFormState);
    };

    return (
        <div>
            {
                showFormState ? (
                    <Modal
                        open={showFormState}
                        onClose={toggleForm}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <TodoForm toggleForm={toggleForm} />
                    </Modal>

                ) : null
            }
            <TodoCard toggleForm={toggleForm} tasks={todos} />
        </div>
    )
}

export default Todos;
