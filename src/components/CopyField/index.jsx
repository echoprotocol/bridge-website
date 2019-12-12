import React, { Component } from 'react';
import copy from '../../assets/images/copy.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CSSTransition } from 'react-transition-group';

class CopyField extends Component {

	state = {
		isCopied: false,
	}

	onCopy = () => {
		this.setState({
			isCopied: true,
		});
		setTimeout(() => {
			this.setState({
				isCopied: false,
			});
		}, 1000);
	};

	render() {
		const { color, background, value } = this.props;

		const fieldStyles = {
			color,
			backgroundColor: background,
		};
		return (
			<div className="copy-field" style={fieldStyles}>
				<span className="copy-field-value">
					{value}
				</span>
				<CopyToClipboard onCopy={this.onCopy} text={value}>
					<span className="copy-field-icon">
						<CSSTransition
							in={this.state.isCopied}
							timeout={300}
							classNames="transition"
							mountOnEnter
							unmountOnExit
						>
							<div className="copy-field-message" style={{ color }}>copied</div>
						</CSSTransition>
						<img src={copy} alt="" />
					</span>
				</CopyToClipboard>
			</div >
		);
	}

}

export default CopyField;
