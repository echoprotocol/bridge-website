import React from 'react';
import PropTypes from 'prop-types';
import CopyButton from '../CopyButton';

const CopyField = ({
	value, iconColor, textColor, backgroundColor,
}) => (
	<div
		className="copy-field"
		style={{
			color: textColor,
			backgroundColor,
		}}
	>
		<span className="copy-field-value">
			{value}
		</span>
		<CopyButton value={value} color={iconColor} />
	</div>
);

CopyField.defaultProps = {
	iconColor: '#ABB2B4',
	textColor: '#fff',
	backgroundColor: '#566469',
};

CopyField.propTypes = {
	value: PropTypes.string.isRequired,
	iconColor: PropTypes.string,
	textColor: PropTypes.string,
	backgroundColor: PropTypes.string,
};

export default CopyField;
