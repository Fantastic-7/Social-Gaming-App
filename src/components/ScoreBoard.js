import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ScoreBoard extends Component {
	uniqByKeepLast = (a, key) => {
		return [...new Map(a.map(x => [key(x), x])).values()];
	};

	render() {
		const { players } = this.props;
		const scores = this.uniqByKeepLast(players, player => player.name);
		console.log(scores);

		return (
			<>
				<h1>Other Players' score</h1>
				<div className="answers_choice">
					{scores.map((score, i) => (
						<div key={i}>
							<p>
								Name: {score.name}, Score: {score.score}
							</p>
						</div>
					))}
				</div>
			</>
		);
	}
}

const mapStateToProps = ({ player }) => ({
	players: player,
});

export default connect(mapStateToProps)(ScoreBoard);
