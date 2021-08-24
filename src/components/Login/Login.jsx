import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login as attemptLogin } from "../../actions/authActions";
import { Container, Paper, Grid, TextField, Typography, Button } from "@material-ui/core";
import stylesheet from "./login-styles";

const Login = () => {
    
    const styles = stylesheet();

    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleValueChange = (e) => {
        const targetInput = e.target;
        const inputName = targetInput.name;
        const inputValue = targetInput.value;

        setCredentials({
            ...credentials,
            [inputName]: inputValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(attemptLogin(credentials));
    };

    return (
        <Paper className={styles.paper}>
            <Container>
                <form className={styles.form} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Login
                </Typography>
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
                            name="username"
                            label="Username"
                            type="text"
                            value={credentials.username}
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
                        <TextField
                            fullWidth={true}
                            name="password"
                            label="Password"
                            type="password"
                            value={credentials.password}
                            onChange={handleValueChange}
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
                        <Button fullWidth type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                        </Grid>
                    </Grid>
                    </Container>
                </form>
            </Container>
        </Paper>
    )
}

export default Login;
