import React from 'react';
import Card from './Card'

class CardContainer extends React.Component {

    render(){
        return (
        <div className="cardContainer">
          <Card isCorrect={this.props.answerOption === 0} img={`http://tepsite.xyz/api/cards/${this.props.selectedCards[0].id}.png`} value="Card 0" onClick={this.props.clickHandler} cardStyle={this.props.cardStyle[0]} />
          <Card isCorrect={this.props.answerOption === 1} img={`http://tepsite.xyz/api/cards/${this.props.selectedCards[1].id}.png`} value="Card 1" onClick={this.props.clickHandler} cardStyle={this.props.cardStyle[1]} />
          <Card isCorrect={this.props.answerOption === 2} img={`http://tepsite.xyz/api/cards/${this.props.selectedCards[2].id}.png`} value="Card 2" onClick={this.props.clickHandler} cardStyle={this.props.cardStyle[2]} />
          <Card isCorrect={this.props.answerOption === 3} img={`http://tepsite.xyz/api/cards/${this.props.selectedCards[3].id}.png`} value="Card 3" onClick={this.props.clickHandler} cardStyle={this.props.cardStyle[3]} />
        </div>
        )
    }

}

export default CardContainer