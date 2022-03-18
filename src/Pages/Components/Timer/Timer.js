import React from 'react';
import './Timer.css'



class Timer extends React.Component{

    constructor(p) {
        super(p);
        this.state = {
            actualTime: 0,
            btnPlayPause: "Start"
        };

        this.counter = null;
        this.initTimer = this.initTimer.bind(this);
        this.clearTimer = this.clearTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
    }

    initTimer() {
        if (this.counter) {
            this.pauseTimer();
            this.setState({ btnPlayPause: "Play" });
        } else {
            this.counter = setInterval(() => {
                this.setState({ actualTime: this.state.actualTime + 0.1 });
            }, 100);
            this.setState({ btnPlayPause: "Pause" });
        }
    }

    pauseTimer() {
        clearInterval(this.counter);
        this.counter = null;
    }

    clearTimer() {
        this.setState({ actualTime: 0 });
        clearInterval(this.counter);
        this.counter = null;
        this.setState({ btnPlayPause: "Play" });
    }

    render() {
        return (
            <div className="timer">
                <div className="time">
                    <h2 className="Text">{this.state.actualTime.toFixed(2)}</h2>
                </div>
                <div className="btns">
                    <input
                        type="button"
                        value={this.state.btnPlayPause}
                        onClick={this.initTimer}
                    />
                    <input type="button" value="Reset" onClick={this.clearTimer} />
                </div>
            </div>
        );
    }
}


export default Timer;