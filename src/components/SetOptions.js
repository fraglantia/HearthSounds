import React from 'react';
import SetCheckbox from './SetCheckbox'

class SetOptions extends React.Component {

    render(){
        return (
            <div className="setOptionContainer">
                <SetCheckbox
                    onChange={this.props.onChange}
                    checked={this.props.cardCheck.isBasic}
                    label="Basic Set"
                    property="isBasic"
                 />

                <SetCheckbox
                    onChange={this.props.onChange}
                    checked={this.props.cardCheck.isClassic}
                    label="Classic Set"
                    property="isClassic"
                 />
                
                <SetCheckbox
                    onChange={this.props.onChange}
                    checked={this.props.cardCheck.isWitchwood}
                    label="The Witchwood Set"
                    property="isWitchwood"
                 />
                
                <SetCheckbox
                    onChange={this.props.onChange}
                    checked={this.props.cardCheck.isBoomsday}
                    label="The Boomsday Project Set"
                    property="isBoomsday"
                 />
                
                <SetCheckbox
                    onChange={this.props.onChange}
                    checked={this.props.cardCheck.isRastakhans}
                    label="Rastakhan's Rumble Set"
                    property="isRastakhans"
                 />
                
                <SetCheckbox
                    onChange={this.props.onChange}
                    checked={this.props.cardCheck.isRise}
                    label="Rise of Shadows Set"
                    property="isRise"
                 />
            </div>
        )
    }

}

export default SetOptions