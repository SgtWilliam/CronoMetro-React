import React from 'react';
import './Timer.css'


function startTimer() {

}

class Timer extends React.Component{
    render() {
        return(
            <div className={"All"}>
                <div className="Timer">
                    <span type="Minute">00</span>:<span type="Hour">00</span>:<span type="Secounds">00</span>
                </div>
            </div>

        )
    }
}

export default Timer;