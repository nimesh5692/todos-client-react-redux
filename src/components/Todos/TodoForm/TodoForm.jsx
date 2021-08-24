import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { createTodo } from "../../../actions/todoActions";
import { v4 as uuidv4 } from "uuid";
import { Container, Paper, Grid, TextField, Button, Select, MenuItem } from "@material-ui/core";
import stylesheet from "./todoform-styles";

const TodoForm = ({toggleForm}) => {
    const styles = stylesheet();

    const dispatch = useDispatch();

    const [todo, setTodo] = useState({
        id: uuidv4(),
        task: "",
        priority: "high",
        is_complete: false,
    });

    const handleValueChange = (e) => {
        const targetInput = e.target;
        const inputName = targetInput.name;
        const inputValue = targetInput.value;

        setTodo({
            ...todo,
            [inputName]: inputValue,
        });
    }

    const handleSubmit = () => {
        dispatch(createTodo(todo));
        toggleForm();
    };

    return (
        <Paper className={styles.paper}>
            <Container>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Container>
                        <Grid
                            container
                            justify="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth={true}
                                name="task"
                                label="Task"
                                type="text"
                                value={todo.task}
                                onChange={handleValueChange}
                                autoComplete="off"
                            />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="center"
                            alignItems="stretch"
                            spacing={3}
                        >
                            <Grid item xs={12} sm={6}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={todo.priority}
                                    onChange={handleValueChange}
                                    fullWidth
                                >
                                    <MenuItem value="high">High</MenuItem>
                                    <MenuItem value="med">Medium</MenuItem>
                                    <MenuItem value="low">Low</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="center"
                            alignItems="stretch"
                            spacing={3}
                        >
                            <Grid item xs={6} sm={6}>
                                <Button fullWidth type="submit" variant="contained" color="primary">
                                    Add Item
                                </Button>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Button fullWidth type="button" variant="contained" color="default" onClick={() => toggleForm()}>
                                    Close
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </form>
            </Container>
        </Paper>
        // <div>
        //     <input type="text" name="task" id="task" placeholder="Task" value={todo.task} onChange={handleValueChange} />
        //     <br />
        //     <select name="priority" id="priority" value={todo.priority} onChange={handleValueChange}>
        //         <option value="high">High</option>
        //         <option value="med">Medium</option>
        //         <option value="low">Low</option>
        //     </select>
        //     <br />
        //     <button name="addTask" id="addTask" onClick={() => handleSubmit()}>Add Task</button>
        //     <button name="resetForm" id="resetForm" onClick={() => toggleForm()}>Close</button>
        // </div>
    )
}

export default TodoForm;
