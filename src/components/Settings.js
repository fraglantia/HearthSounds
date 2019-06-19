import React from 'react';
import SetOptions from './SetOptions'

class Settings extends React.Component {

    render(){
        return (
            <div className="settings">
                <div className="headContainer">
                    <h2>Before You Start...</h2>
                </div>

                <div className="settingsRow">
                    
                    <div className="settingsCol">
                        <div>
                            <h3 className="settingsTitle">How to play:</h3>
                            <div className="howTo">
                                <div className="howToPara">
                                    <p>You will be given 1 minute to</p>
                                    <p>correctly guess as many cards as you can</p>
                                    <p>given the <b>PLAY</b>, <b>ATTACK</b>, and <b>DEATH</b></p>
                                    <p>sound effects of <b>HEARTHSTONE</b><sup>&reg;</sup> minions.</p>
                                </div>
                                <div className="howToPara">
                                    <p>Each <b>correct</b> answer will reward you <b>10 points</b>,</p>
                                    <p>but each <b>wrong</b> answer will cost you <b>-10 points</b>.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="settingsCol">
                        <div>
                            <h3 className="settingsTitle">Controls:</h3>
                            <div className="howTo">
                                <p><b>[ J ], [ K ], [ L ]</b> to <b>PLAY</b> sounds.</p>
                                <p><b>[ A ], [ S ], [ D ], [ F ]</b> to <b>GUESS</b> cards.</p>
                            </div>
                        </div>
                    
                        <div className="startButton" onClick={this.props.onStart} >
                            <div className="startText">START</div>
                            <div className="goText">GO!</div>
                        </div>
                    </div>

                    <div className="settingsCol">
                        <h3 className="settingsTitle">Setup your game:</h3>
                        <SetOptions onChange={this.props.onChange} cardCheck={this.props.cardCheck} />
                    </div>
                </div>

                

            </div>
        )
    }

}

export default Settings