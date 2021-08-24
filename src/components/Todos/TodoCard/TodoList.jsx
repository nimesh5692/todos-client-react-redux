import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { updateTodo } from "../../../actions/todoActions";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    Badge,
    Button
} from "@material-ui/core";
import stylesheet from "./todolist-styles";

const TodoCard = ({toggleForm, tasks}) => {
    const styles = stylesheet();

    const dispatch = useDispatch();

    const [todosList, setTodosList] = useState(tasks)

    useEffect(() => {
        setTodosList(tasks);
    }, [tasks]);

    const handleTodoUpdate = (e) => {
        const targetInput = e.target;
        const datasetId = targetInput.dataset.id;
        // const inputName = targetInput.name;
        const inputValue =
        targetInput.type === 'checkbox' ? targetInput.checked : targetInput.value;

        dispatch(updateTodo(datasetId, inputValue));
    };

    const Priority = ({level}) => {
        let displayText;
        let priorityClass;

        if (level === 'high') {
            priorityClass = {badge: styles.highPriority};
            displayText = 'High';
        }

        if (level === 'med') {
            priorityClass = {badge: styles.mediumPriority};
            displayText = 'Medium';
        }

        if (level === 'low') {
            priorityClass = {badge: styles.lowPriority};
            displayText = 'Low';
        }

        return (
            <Badge badgeContent={displayText} classes={priorityClass}></Badge>
        )
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>
                            <Button variant="contained" color="primary" onClick={() => toggleForm()}>
                                Add Task
                            </Button>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell align="center">Priority</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            todosList.map((todo, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell align="center">
                                            <Checkbox
                                                data-id={todo.id}
                                                checked={todo.is_complete}
                                                onChange={handleTodoUpdate}
                                                inputProps={{ 'aria-label': 'success checkbox', 'data-id':`${todo.id}`, 'name': 'is_complete' }}
                                            />
                                        </TableCell>
                                        <TableCell>{todo.task}</TableCell>
                                        <TableCell align="center">
                                            <Priority level={todo.priority}/>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
                        {/* // <div key={index}>
                        //     <input type="checkbox" name="is_complete" checked={todo.is_complete} data-id={todo.id} onChange={handleTodoUpdate} readOnly />
                        //     <p>{todo.task} - {todo.priority}</p>
                        // </div> */}
        </div>
    )
}

export default TodoCard;
