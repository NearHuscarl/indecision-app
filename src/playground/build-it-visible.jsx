class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false,
		};

		this.handleVisibility = this.handleVisibility.bind(this);
	}

	handleVisibility() {
		this.setState((prevState) => {
			return { visibility: !prevState.visibility };
		});
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleVisibility}>
					{this.state.visibility ? 'Hide details' : 'Show details'}
				</button>
				<p>
					{this.state.visibility &&
						'Hey. There are some details you can now see!'}
				</p>
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
