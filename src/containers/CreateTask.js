import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TaskForm from '../component/TaskForm';
import './CreateTask.css';
import shortid from 'shortid';

class CreateTask extends Component {

state = {
    id: '',
    name: '',
    startTime: '',
    endTime: '',
    color: ''
    /* id: shortid.generate(),
        name: "Work",
        startTime: "9:00",
        endTime: "12:00",
        color: "#1ECC26" */
}

    handlePick = () => {
        console.log("handle pick");
    }
    
    handleType = (event) => {
console.log(event)
    }

    render() {
        const { open, handleClose, handleSubmit, startTime } = this.props;

        return (
            <Dialog open={ open } onClose={handleClose}>
                <DialogTitle id="form-dialog-title">
                    Create new task
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Select time, name and color
                    </DialogContentText>
                    <TaskForm startTime={ startTime } handleSubmit={ handleSubmit } handlePick={ this.handlePick } handleClose={ handleClose } handleType={this.handleType} />
                </DialogContent>
            </Dialog>
        )
    }
}

export default CreateTask