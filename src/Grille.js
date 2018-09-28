import React, { Component } from "react";
import Case from "./Case.js";

class Grille extends Component {
	state = {
		nbC: 0,
		tab: [["", "", ""], ["", "", ""], ["", "", ""]]
	};

	changeNbC() {
		if (this.state.nbC < 9) this.setState({ nbC: this.state.nbC + 1 });
		this.verif();
	}
	verif() {
		console.log(
			this.refs.C1.state.value,
			this.refs.C2.state.value,
			this.refs.C3.state.value
		);
		this.setState({
			tab: [
				[
					this.refs.C1.state.value,
					this.refs.C2.state.value,
					this.refs.C3.state.value
				],
				[
					this.refs.C4.state.value,
					this.refs.C5.state.value,
					this.refs.C6.state.value
				],
				[
					this.refs.C7.state.value,
					this.refs.C8.state.value,
					this.refs.C9.state.value
				]
			]
		});
		console.log(this.state.tab);
	}

	render() {
		return (
			<div className="Grille">
				<table className="Grille-tab">
					<thead>
						<tr>
							<th colSpan="3">coups joues: {this.state.nbC}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<Case
								ref="C1"
								nbC={this.state.nbC}
								changeNbC={this.changeNbC.bind(this)}
							/>
							<Case
								ref="C2"
								nbC={this.state.nbC}
								changeNbC={this.changeNbC.bind(this)}
							/>
							<Case
								ref="C3"
								nbC={this.state.nbC}
								changeNbC={this.changeNbC.bind(this)}
							/>
						</tr>
						<tr>
							<Case
								ref="C4"
								nbC={this.state.nbC}
								changeNbC={this.changeNbC.bind(this)}
							/>
							<Case
								ref="C5"
								nbC={this.state.nbC}
								changeNbC={this.changeNbC.bind(this)}
							/>
							<Case
								ref="C6"
								nbC={this.state.nbC}
								changeNbC={this.changeNbC.bind(this)}
							/>
						</tr>
						<tr>
							<Case
								ref="C7"
								nbC={this.state.nbC}
								changeNbC={this.changeNbC.bind(this)}
							/>
							<Case
								ref="C8"
								nbC={this.state.nbC}
								changeNbC={this.changeNbC.bind(this)}
							/>
							<Case
								ref="C9"
								nbC={this.state.nbC}
								changeNbC={this.changeNbC.bind(this)}
							/>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
export default Grille;
