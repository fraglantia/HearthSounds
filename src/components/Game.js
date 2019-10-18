import React from 'react'
import Scoreboard from './Scoreboard'
import KeyDetector from './KeyDetector'
import ButtonContainer from './ButtonContainer'
import CardContainer from './CardContainer'
import Timer from './Timer'
import Settings from './Settings'
import Endgame from './Endgame'
import audios from './Datas/audios'
import apiurl from './Datas/apiurl'

class Game extends React.Component {

  constructor(){
    super()
      
    this.correctSound = audios.correct;
    this.wrongSound = audios.wrong;

    this.buttonDownStyle = {boxShadow: '-2px -2px 4px'}
    this.buttonUpStyle = {boxshadow: '2px 2px 7px'}

    this.cardUpStyle = {
      'transform': 'scale(1.0)',
    }
    this.cardDownStyle = {
      'transform': 'scale(1.05)',
    }

    this.state = {
      loading: true,
      isEnded: false,
      isStarted: false,
      timer: {
        isOn: true,
        timeLeft: 1
      },      
      buttonStyle: [this.buttonUpStyle, this.buttonUpStyle, this.buttonUpStyle],
      cardStyle: [this.cardUpStyle, this.cardUpStyle, this.cardUpStyle, this.cardUpStyle],
      score: 0,
      allCards: {},
      selectedCards: [],
      answerOption: 0,
      answerSounds: [],
      cardSets: ["basic"],
      cardCheck: {
        isBasic: true,
        isClassic: false,
        isWitchwood: false,
        isBoomsday: false,
        isRastakhans: false,
        isRise: false
      }
    }
    this.getRandomAnswer = this.getRandomAnswer.bind(this)
    this.handleSetCheck = this.handleSetCheck.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.startGame = this.startGame.bind(this)
    this.restartGame = this.restartGame.bind(this)

  }

  componentDidMount() {
    this.setState({loading: true})
    fetch(apiurl)
            .then(response => response.json())
            .then(response => {
                const allCards = response
                const newState = {
                  ...this.state,
                  loading: false, 
                  allCards
                }
                const newestState = this.getRandomAnswer(newState)
                this.setState(newestState)
            })
  }

  startGame(){
    this.setState({isStarted: true, score:0})
    this.correctSound.play()
    this.startTimer(60);
    // MAKE TIME FEATURE?
  }

  restartGame(){
    this.correctSound.play()
    this.setState({isStarted: false, score:0, isEnded: false, timer:{isOn: true, timeLeft:1}})
  }

  generateRandomCard(prevState) {
    const randSet = prevState.cardSets[Math.floor(Math.random() * prevState.cardSets.length)]
    const randCardsOfSet = prevState.allCards[randSet]
    const randCard = randCardsOfSet[Math.floor(Math.random() * randCardsOfSet.length)]
    return randCard
  }

  getRandomAnswer(prevState) {
    let randCards, valid
    do {
      randCards = []
      randCards.push(this.generateRandomCard(prevState))
      randCards.push(this.generateRandomCard(prevState))
      randCards.push(this.generateRandomCard(prevState))
      randCards.push(this.generateRandomCard(prevState))

      valid = true
      var i,j
      for (i=0; i<4; i++) {
        for (j=i+1; j<4; j++){
          if (randCards[i] === randCards[j]) valid = false
        }
      }

    } while(!valid)

    const correctNum = Math.floor(Math.random() * 4)

    const newPlaySound = new Audio(randCards[correctNum].playSound)
    const newAttackSound = new Audio(randCards[correctNum].attackSound)
    const newDeathSound = new Audio(randCards[correctNum].deathSound)

    const newState = {
      ...prevState,
      selectedCards: randCards, 
      answerOption: correctNum,
      answerSounds: [newPlaySound, newAttackSound, newDeathSound]
      }
    return newState
  }

  handleSetCheck(event) {
    const {name, checked} = event.target

    if (name !== "isBasic") {
      this.setState((prevState) => {

        const newCheck = {...prevState.cardCheck, [name] : checked}

        let newSets = []
        if (newCheck.isBasic) { newSets.push("basic") }
        if (newCheck.isClassic) { newSets.push("classic") }
        if (newCheck.isWitchwood) { newSets.push("witchwood") }
        if (newCheck.isBoomsday) { newSets.push("boomsday") }
        if (newCheck.isRastakhans) { newSets.push("rastakhans") }
        if (newCheck.isRise) { newSets.push("rise") }

        const newState = {
          ...prevState,
          cardSets: newSets,
          cardCheck : newCheck
        }
        return newState
      })
    }
  }

  handleCardClick(isCorrect){
    if (isCorrect) {
      this.setState((prevState) =>  { return {...prevState, score: prevState.score+10 }})
      this.correctSound.play()
    } 
    else {
      this.setState((prevState) =>  { return {...prevState, score: prevState.score-10 }})
      this.wrongSound.play()
    }
    this.setState( (prevState) => (this.getRandomAnswer(prevState)) )
  }

  changeStyle(type, i) {
    if (type === 'button') {
      this.setState((prevState) =>
      { let newBtnStyle = prevState.buttonStyle
        newBtnStyle[i] = this.buttonDownStyle

        return {
        ...prevState, 
        buttonStyle: newBtnStyle }
      })

      setTimeout(() => {
        this.setState((prevState) =>  
        { let newBtnStyle = prevState.buttonStyle
          newBtnStyle[i] = this.buttonUpStyle

          return {
          ...prevState, 
          buttonStyle: newBtnStyle }
        })
      }, 200)
    }

    else if (type === 'card') { 
      this.setState((prevState) =>
      { let newCardStyle = prevState.cardStyle
        newCardStyle[i] = this.cardDownStyle
        return {
        ...prevState, 
        cardStyle: newCardStyle }
      })

      setTimeout(() => {
        this.setState((prevState) =>  
        { let newCardStyle = prevState.cardStyle
          newCardStyle[i] = this.cardUpStyle

          return {
          ...prevState, 
          cardStyle: newCardStyle }
        })
      }, 200)
    }
    
  }

  handleKeyPress(event){
    const keypress = event.keyCode

    if (keypress === 74) {
      this.state.answerSounds[0].play()
      this.changeStyle('button', 0)
    }
    else if (keypress === 75) {
      this.state.answerSounds[1].play()
      this.changeStyle('button', 1)
    }
    else if (keypress === 76) {
      this.state.answerSounds[2].play()
      this.changeStyle('button', 2)
    }
    else if (keypress === 65) {
      this.handleCardClick(this.state.answerOption === 0)
      this.changeStyle('card', 0)
    }
    else if (keypress === 83) {
      this.handleCardClick(this.state.answerOption === 1)
      this.changeStyle('card', 1)
    }
    else if (keypress === 68) {
      this.handleCardClick(this.state.answerOption === 2)
      this.changeStyle('card', 2)
    }
    else if (keypress === 70) {
      this.handleCardClick(this.state.answerOption === 3)
      this.changeStyle('card', 3)
    }

  }

  startTimer(maxTime) {
      this.setState({
          timer: {
            isOn: true,
            timeLeft: maxTime
          }
      })
      this.tickTimer()
      
  }

  tickTimer() {
      if (this.state.timer.timeLeft > 0 && this.state.timer.isOn) {
          setTimeout(() => {
              this.setState((prevState) =>  {
                return {
                ...prevState,
                timer: {
                  isOn: true,
                  timeLeft: prevState.timer.timeLeft - 1} 
                }
              })
              this.tickTimer()
            }, 1000)
      }
      else {
          this.stopTimer()
      }
  }

  stopTimer() {
    this.setState({
      isEnded: true,
      timer: {
        isOn: false,
        timeLeft: 0
      }
    })
    this.wrongSound.play()
 }

  render() {
    if (this.state.loading) {
      return (
        <div className="game">
          <div className="settingsTitle">
            <h1>Loading...</h1>
          </div>
        </div>
      )
    }

    else if(!this.state.isStarted) {
      return (
        <Settings onChange={this.handleSetCheck} cardCheck={this.state.cardCheck} onStart={this.startGame}/>
    )}

    else if(this.state.isEnded) {
      return (
        <Endgame score={this.state.score} onRestart={this.restartGame} />
    )}

    else { return(
      <div className="game">

        <div className="headContainer">
          <Scoreboard score={this.state.score} />
          <Timer timeLeft={this.state.timer.timeLeft} />
        </div>

        
        <KeyDetector handleKeyPress={this.handleKeyPress} />

        <ButtonContainer answerSounds={this.state.answerSounds} buttonStyle={this.state.buttonStyle} />

        <CardContainer answerOption={this.state.answerOption} selectedCards={this.state.selectedCards} clickHandler={this.handleCardClick} cardStyle={this.state.cardStyle} />
          
      </div>
    )}
  }
}

export default Game;
