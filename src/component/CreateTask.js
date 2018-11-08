import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class CreateTask extends Component {
    render() {
        const { open, handleClose, startTime } = this.props

        return (
            <Dialog open={ open } onClose={handleClose}>
                <DialogTitle id="form-dialog-title">
                    Create new task
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Select time, name and color
                    </DialogContentText>
                    <form>
                        <TextField
                            autoFocus
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            id="time"
                            label="Start clock"
                            type="time"
                            defaultValue={startTime}
                            fullWidth
                            inputProps={{
                                step: 1800,
                            }}
                        />
                        <TextField
                            id="time"
                            label="Finish clock"
                            type="time"
                            defaultValue="00:00"
                            fullWidth
                            inputProps={{
                                step: 1800,
                            }}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default CreateTask