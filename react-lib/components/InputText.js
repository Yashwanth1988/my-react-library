import React from 'react'

export default class InputText extends React.Component{
	render(){
		return <input type="text"
					id={this.props.id}
					className={this.props.className}
					value={this.props.value}
					onChange={this.props.onChange} />
	}
}