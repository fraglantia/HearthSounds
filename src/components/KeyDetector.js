import React from 'react';

class KeyDetector extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', this.props.handleKeyPress)
    }
      
    componentWillUnmount() {
        document.removeEventListener('keydown', this.props.handleKeyPress)
    }

    render(){
        return (
            <div onKeyPress={this.props.handleKeyPress}></div>
        )
    }

}

export default KeyDetector