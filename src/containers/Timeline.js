import React, { Component } from 'react';
import Hours from '../component/Hours';
import './Timeline.css';
import CreateTask from '../containers/CreateTask';
import shortid from 'shortid';

let data = {
    time: [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00"
    ],
    size: 1,
    tasks: [
        {
            id: shortid.generate(),
            name: "Sleep",
            startTime: "0:00",
            endTime: "7:00",
            color: "#1999F5"
        },
        {
            id: shortid.generate(),
            name: "Work",
            startTime: "8:00",
            endTime: "12:00",
            color: "#1ECC26"
        }
    ]
}

class Timeline extends Component {

    state = {
        open: false,
        startTime: null
    }

    taskColor = (tasks, currentTime) => {
        let color;
        tasks.forEach((task) => {
            const timeNow = +currentTime.replace(/:+/g, '.');
            const startTime = +task.startTime.replace(/:+/g, '.');
            const endTime = +task.endTime.replace(/:+/g, '.');
            if (endTime > startTime) {
                if (timeNow >= startTime && timeNow < endTime) {
                    return color = task.color;
                }
            } else {
                if (timeNow >= endTime && timeNow < startTime) {
                    return color = task.color;
                }
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

    handleSubmit = (event, object) => {
        event.preventDefault();
        const id = shortid.generate();
        data.tasks = [...data.tasks, { id, ...object }];
        this.setState({
            open: false
        })
        return data.tasks;
    }

    render() {
        const tasks = data.tasks;
        const hours = data.time;
        const size = data.size;
        const { open, startTime } = this.state;

        const component = hours.map((time, index) => {
            return <Hours key={index}
                time={time}
                color={this.taskColor(tasks, time)}
                size={size}
                timeSelect={this.handleClickOpen}
            />
        })

        return (
            <div className="container">
                <h2>Date counter</h2>
                <div className="hours-wrapped">
                    {component}
                </div>
                <CreateTask open={open}
                    handleClose={this.handleClose}
                    handleSubmit={this.handleSubmit}
                    startTime={startTime}
                />
            </div>
        )
    }
}

export default Timeline;