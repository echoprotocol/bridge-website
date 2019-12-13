import React, { Component } from 'react';
import CopyButton from '../CopyButton';

class CopyField extends Component {


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
				<CopyButton value={value} />
			</div >
		);
	}

}

export default CopyField;
