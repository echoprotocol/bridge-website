import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

class CopyButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isCopied: false,
		};
	}

	onCopy = () => {
		if (!this.state.isCopied) {
			this.setState({
				isCopied: true,
			});
			setTimeout(() => {
				this.setState({
					isCopied: false,
				});
			}, 3000);
		}
	};

	render() {
		const { value, color, withText } = this.props;
		return (
			<CopyToClipboard onCopy={this.onCopy} text={value} >
				<button className="copy-field-button" type="button">
					<CSSTransition
						in={this.state.isCopied}
						timeout={300}
						classNames="transition"
						mountOnEnter
						unmountOnExit
					>
						<div className="copy-field-message" style={{ color }}>copied</div>
					</CSSTransition>
					<div className="ic-copy" style={{ color }} />
					{
						withText &&
						<span className="copy-field-text" style={{ color }}> Copy link </span>
					}
				</button>
			</CopyToClipboard>
		);
	}

}

CopyButton.defaultProps = {
	color: '#ABB2B4',
	withText: false,
};

CopyButton.propTypes = {
	value: PropTypes.string.isRequired,
	color: PropTypes.string,
	withText: PropTypes.bool,
};

export default CopyButton;

