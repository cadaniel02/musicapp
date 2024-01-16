import React, {useState} from "react";
import {Button} from "@mui/material";
import {Grid} from "@mui/material";
import {Typography} from "@mui/material";
import {TextField} from "@mui/material";
import {FormHelperText} from "@mui/material";
import {FormControl} from "@mui/material";
import {Link} from "react-router-dom";
import {Radio} from "@mui/material";
import {RadioGroup} from "@mui/material";
import {FormControlLabel} from "@mui/material";

import { useNavigate } from 'react-router-dom';

const CreateRoomPage = () => {
    const [votes_to_skip, setVotes] = useState(2);
    const [guest_can_pause, setCanPause] = useState(false);
    const navigate  = useNavigate();

    const handleVotesChange = event => {
        setVotes(event.target.value)
    }
    const handleGuestCanPauseChange = event => {
            setCanPause(event.target.value === "true" ? true : false)
    }

    const handleCreateRoom = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                votes_to_skip: votes_to_skip,
                guest_can_pause: guest_can_pause
            })
        };
        fetch('/api/create-room',requestOptions)
        .then((response) => response.json())
        .then((data) => navigate('/room/' + data.code)
        );
    }
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant='h4'>
                    Create a Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>   
                        <div align="center">Guest control of playback</div>
                    </FormHelperText> 
                        <RadioGroup row defaultValue="true" onChange = {handleGuestCanPauseChange}>
                            <FormControlLabel 
                                value="true" 
                                control={<Radio color="primary" />}
                                label="Play/Pause"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel 
                                value="false" 
                                control={<Radio color="secondary" />}
                                label="No Control"
                                labelPlacement="bottom"
                            />
                        </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField 
                        required="true" 
                        type="number" 
                        defaultValue ={votes_to_skip} 
                        inputProps={{
                            min:1,
                            style: {textAlign: "center"}
                        }}
                        onChange = {handleVotesChange}
                    />
                    <FormHelperText>
                    <div align="center">
                        Votes Required to Skip
                    </div>
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" onClick={handleCreateRoom}>
                    Create Room
                </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" to="/" component={Link}>
                    Back
                </Button>
            </Grid>
        </Grid>    
    );
}
export default CreateRoomPage;