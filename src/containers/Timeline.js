import React, { Component } from 'react';
import Hours from '../component/Hours';
import './Timeline.css';
import CreateTask from '../component/CreateTask';

class Timeline extends Component {

    state = {
        open: false,
        startTime: null
    }

    taskStatus = (tasks, currentTime) => {
        let color;
        tasks.forEach((task) => {
            if (currentTime >= task.startTime && currentTime <= task.endTime) {
                return color = task.color;
            }
        })
        return color;
    }

    handleClickOpen = (startTime) => {
        this.setState({
            startTime: startTime,
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    render() {
        const { size } = this.props;
        const { open, startTime } = this.state;

        const hours = this.props.hours.map((time, index) => {
            const timeFormat = time + ":00";
            const color = this.taskStatus(this.props.tasks, time);
            return <Hours key={index} time={timeFormat} color={color} size={size} timeSelect={this.handleClickOpen} />
        })

        return (
            <div className="container">
                <h2>Date counter</h2>
                <div className="hours-wrapped">
                    { hours }
                </div>
                <CreateTask open={open} handleClose={this.handleClose} startTime={startTime}/>
            </div>
        )
    }
}

export default Timeline;