import React, { Component } from 'react';
import { render } from 'react-dom';

export default class NotFound extends Component {
	render(){
		return(
			<div className="alert alert-danger">
				<strong>Sorry!</strong> Data not found.
			</div>
		)
	}
}