import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

	render() {
		const { children } = this.props;
		return (
			<div className="wrapper">
				{children}
			</div>
		);
	}

}

App.propTypes = {
	children: PropTypes.element.isRequired,
};

export default App;
