import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const WidgetFormField = ({
	id, label, placeholder, className, error,
}) => (
	<div className={classnames('widget-field-wrap', { [`${className}`]: className }, { error })}>
		<label htmlFor={id} className="label">{label}</label>
		<input name="account" id={id} placeholder={placeholder} className="field" />
		{
			error &&
				<span className="error-block"> {error} </span>
		}
	</div>
);

WidgetFormField.defaultProps = {
	id: null,
	label: null,
	placeholder: 'Placeholder',
	className: null,
	error: null,
};

WidgetFormField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	error: PropTypes.string,
};

export default WidgetFormField;
