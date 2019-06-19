import React from 'react';

class SetCheckbox extends React.Component {

    render(){
        return (
            <div className="setOption">
                <div className="pretty p-icon p-plain p-toggle p-jelly">
                    <input 
                        type="checkbox"
                        name={this.props.property}
                        onChange={this.props.onChange}
                        checked={this.props.checked}
                    />
                    <div className="state p-on p-success-o">
                        <i className="icon mdi mdi-check"></i>
                        <label>{this.props.label}</label>
                    </div>
                    <div className="state p-off p-danger-o">
                        <i className="icon mdi mdi-close"></i>
                        <label>{this.props.label}</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default SetCheckbox