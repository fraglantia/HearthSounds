import React from 'react';

class Scoreboard extends React.Component {
    render(){
        return (
            <div className="scoreboard">
                <h2>Your Score: {this.props.score}</h2>
            </div>
        )
    }

}

export default Scoreboard