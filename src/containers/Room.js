import React, { Component } from 'react'
import VideoPanel from './VideoPanel';

const URL = 'ws://localhost:3003'

class Room extends Component {
    ws = new WebSocket(URL)
    message = {
        type: 'command',
        message: '',
        author: '',
    }

    componentDidMount() {
        this.ws.onopen = () => {
            console.log("WebSocket was sucessfully opened")
        }

        this.ws.onmessage = event => {
            // TODO: Delegate it to chat or video component or both(notification)
            // const _msg = JSON.parse(event.data)
        }

        this.ws.onclose = () => {
            this.setState({
                ws: new WebSocket(URL),
            })
        }
    }

    render() {
        return (
            <div className="roomWrapper">
                <div className="videoPanelContainer">
                    <VideoPanel
                        connection={this.ws}
                    />
                </div>
                <div className="chatContainer">

                </div>
                <div className="videoContainer">

                </div>
            </div>
        )
    }
}

export default Room