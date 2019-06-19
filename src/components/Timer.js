import React from 'react';

class Timer extends React.Component {
    
    render(){
        return (
            <div className="timer">
                <h2>Time Left: {this.props.timeLeft}</h2>
            </div>
        )
    }

}

export default Timer