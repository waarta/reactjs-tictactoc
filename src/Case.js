import React, { Component } from "react";

class Case extends Component {
	state = {
		value: ""
	};

	onClickCase() {
		if (this.state.value === "") {
			this.props.nbC % 2 === 0
				? this.setState({ value: "x" })
				: this.setState({ value: "0" });
			this.props.changeNbC();
		}
	}

	render() {
		return (
			<td
				id={this.props.id}
				className="Case"
				onClick={this.onClickCase.bind(this)}
			>
				{this.state.value}
			</td>
		);
	}
}

export default Case;
