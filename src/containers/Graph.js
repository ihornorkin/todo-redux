import React, { Component } from 'react';
import Timeline from './Timeline';

class Graph extends Component {
    render() {
        const { time, tasks, size } = this.props.data;

        return (
            <div>
                <Timeline hours={time}
                    tasks={tasks}
                    size={size} />
            </div>
        )
    }
}

export default Graph;