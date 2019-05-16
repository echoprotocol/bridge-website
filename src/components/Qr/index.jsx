import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import qr from '../../assets/images/temp/qr.jpg';

class Qr extends React.Component {

	render() {
		const { color } = this.props;
		return (
			<div
				className={classnames('qr', { color })}
			>
				<img src={qr} alt="qr" />
			</div>
		);
	}

}

Qr.propTypes = {
	color: PropTypes.string,
};

Qr.defaultProps = {
	color: '',
};


export default Qr;
