import React from 'react'

export default class Button extends React.Component{
	render(){
		return <input type="button"
					id={this.props.id}
					className={this.props.className}
					value={this.props.label}
					onClick={this.props.onClick} />
	}
}