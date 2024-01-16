import React, { useState, useEffect } from "react";
import {TextField, Button, Grid, Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";

const JoinRoomPage = () => {
    const location = useLocation();

    const [roomCode, setRoomCode] = useState('');
    const [error] = useState(location.state?.error.length > 0 ? location.state?.error : '');
    window.history.replaceState(null, '');

    const handleTextFieldChange = event => {
        setRoomCode(event.target.value);
    }

    return (
        <Grid container spacing={1} align = "center">
            <Grid item xs={12}>
                <Typography component='h4' variant='h4'>
                    Join a Room
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    error={error}
                    label="Code"
                    placeholder="Enter a Room Code"
                    value={roomCode}
                    helperText={error}
                    variant="outlined"
                    onChange={handleTextFieldChange}
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" to={"/room/" + roomCode} component={Link}>
                    Join Room
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>
    );
}

export default JoinRoomPage;