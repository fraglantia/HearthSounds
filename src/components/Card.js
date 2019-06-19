import React from 'react';

class Card extends React.Component {

    render(){
        return (
            <div className="cardItem" >
                <label>
                    <input type="radio" name="card" value={this.props.value}></input>
                    <img 
                        src={this.props.img} 
                        className="cardImg" 
                        alt="a card" 
                        onClick={() => this.props.onClick(this.props.isCorrect)} 
                        style={this.props.cardStyle}
                    />
                </label>
            </div>
        )
    }

}

export default Card