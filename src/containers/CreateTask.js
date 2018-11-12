import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TaskForm from '../component/TaskForm';
import './CreateTask.css';

class CreateTask extends Component {

    state = {
        name: '',
        startTime: '',
        endTime: '',
        color: ''
    }

    handlePick = (color) => {
        this.setState({
            color: color
        })
    }

    handleType = (event, type) => {
        switch (type) {
            case "startTime":
                return this.setState({
                    startTime: event.target.value,
                });
            case "endTime":
                return this.setState({
                    endTime: event.target.value
                })
            case "name":
                return this.setState({
                    name: event.target.value
                })    
            default:
                return this.state    
        }
    }

    handleEnter = () => {
        this.setState({
            startTime: this.props.startTime
        })
    }

    render() {
        const { open, handleClose, handleSubmit, startTime } = this.props;

        return (
            <Dialog open={open} onClose={handleClose} onEntered={this.handleEnter} >
                <DialogTitle id="form-dialog-title">
                    Create new task
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Select time, name and color
                    </DialogContentText>
                    <TaskForm startTime={startTime} handleSubmit={(e) => handleSubmit(e, this.state)} handlePick={this.handlePick} handleClose={handleClose} handleType={this.handleType} />
                </DialogContent>
            </Dialog>
        )
    }
}

export default CreateTask