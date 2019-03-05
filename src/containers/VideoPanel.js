import React, { Component } from 'react'

class VideoPanel extends Component {
    ws = this.props

    render() {
        return (
            <div>
                <button>Start</button>
                <button>Pause</button>
            </div>
        )
    }
}

export default VideoPanel