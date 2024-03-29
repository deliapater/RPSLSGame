import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function HeaderBar() {
    return (
        <div>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Rock, Paper, Scissors, Lizard, Spock Game
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
