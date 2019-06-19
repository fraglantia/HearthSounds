import React from 'react';

class Endgame extends React.Component {

    render(){
        return (
            <div className="settings">

                <div className="settingsCol settingsTitle" >
                    <h2>Your Score: {this.props.score}</h2>
                </div>
                <div className="startButton" onClick={this.props.onRestart}>
                    <div className="startText">RESTART</div>
                    <div className="goText">GO!</div>
                </div>

            </div>
        )
    }

}

export default Endgame