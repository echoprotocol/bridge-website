import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { CSSTransition } from 'react-transition-group';

class CopyButton extends Component {

	state = {
		isCopied: false,
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
		const { value, color } = this.props;
		return (
			<CopyToClipboard onCopy={this.onCopy} text={value} >
				<span className="copy-field-icon">
					<CSSTransition
						in={this.state.isCopied}
						timeout={300}
						classNames="transition"
						mountOnEnter
						unmountOnExit
					>
						<div className="copy-field-message" style={{ color }} >copied</div>
					</CSSTransition>
					<div className="ic-copy" style={{ color }} />
				</span>
			</CopyToClipboard>
		);
	}

}


export default CopyButton;

