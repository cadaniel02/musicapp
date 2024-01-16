import React, { useState } from 'react'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

const Room = () => {
        const { roomCode } = useParams();
        const navigate = useNavigate();
        const [votes_to_skip, setVotes] = useState(2);
        const [guest_can_pause, setCanPause] = useState(false);
        const [is_host, setHost] = useState(false);

        React.useEffect(() => {
            fetch('/api/get-room' + '?code=' + roomCode)
            .then((response) => {
                if(response.ok){
                    return response.json()
                }
                else{
                    throw new Error(response.statusText);
                }
            })
            .then((data) =>{
                setVotes(data.votes_to_skip);
                setCanPause(data.guest_can_pause);
                setHost(data.is_host);
             })
             .catch((error) =>{
                navigate("/join", {state: {error:"Room Not Found"}});
             });
        })
        return (
          <div>
            <h3>{roomCode}</h3>
            <p>Votes: {votes_to_skip}</p>
            <p>Guest Can Pause: {guest_can_pause.toString()}</p>
            <p>Host: {is_host.toString()}</p>
          </div>
        );
    };

export default Room;

