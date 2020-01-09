import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const WidgetFormField = ({
	id, label, placeholder, className, error, value, onChange, onFocus, onKeyUp, onBlur,
}) => (
	<div className={classnames('widget-field-wrap', { [`${className}`]: className }, { error })}>
		<label htmlFor={id} className="label">{label}</label>
		<input
			name="account"
			id={id}
			placeholder={placeholder}
			className="field"
			value={value}
			onFocus={() => (onFocus ? onFocus() : null)}
			onBlur={() => (onBlur ? onBlur() : null)}
			onChange={(e) => onChange(e)}
			onKeyUp={(e) => (onKeyUp ? onKeyUp(e) : null)}
			type="text"
		/>
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
	onChange: null,
	onFocus: null,
	onKeyUp: null,
	onBlur: null,
	value: null,
};

WidgetFormField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onKeyUp: PropTypes.func,
	onBlur: PropTypes.func,
	error: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
	]),
};

export default WidgetFormField;
