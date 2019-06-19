import React from 'react';

class ButtonContainer extends React.Component {

    render(){
        return (
            <div className="buttonContainer">
                <div className="buttonItem" style={this.props.buttonStyle[0]}>
                    <img src="./resources/audio.png" className="audioImg" onClick={() => this.props.answerSounds[0].play()} alt="playAudio" />
                    <p>PLAY</p>
                </div>
                <div className="buttonItem" style={this.props.buttonStyle[1]}>
                    <img src="./resources/audio.png" className="audioImg" onClick={() => this.props.answerSounds[1].play()} alt="attackAudio" />
                    <p>ATTACK</p>
                </div>
                <div className="buttonItem" style={this.props.buttonStyle[2]}>
                    <img src="./resources/audio.png" className="audioImg" onClick={() => this.props.answerSounds[2].play()} alt="deathAudio" />
                    <p>DEATH</p>
                </div>         
            </div>
        )
    }

}

export default ButtonContainer