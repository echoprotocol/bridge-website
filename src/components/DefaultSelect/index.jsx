import React, { createRef, useRef } from 'react';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Select, { components } from 'react-select';
import PropTypes from 'prop-types';
import arrow from '../../assets/images/dropdown-arrow.svg';

function MenuList(props) {
	return (
		<PerfectScrollbar className="select-scroll">
			<div className="select-menu">
				{props.children}
			</div>
		</PerfectScrollbar>
	);
}

const scrollByKeyboard = (optionRef, isFocused) => {


	if (!optionRef || !optionRef.current) {
		return;
	}

	const optionParent = optionRef.current.offsetParent;
	if (!optionParent || !isFocused) {
		return;
	}

	const controlPanel = optionRef.current.closest('.default-select');
	const optionOffset = optionRef.current.offsetTop;

	controlPanel.addEventListener('keyup', () => {
		optionParent.scrollTop = optionOffset;
	});
};

const CustomOption = ({
	children, innerProps, isFocused, isSelected,
}) => {
	const optionRef = useRef();
	scrollByKeyboard(optionRef, isFocused);
	return (
		<div ref={optionRef} {...innerProps} className={classnames('select-field', { focus: isFocused }, { selected: isSelected })}>
			{children}
		</div>
	);
};

// eslint-disable-next-line no-undef
const DropdownIndicator = (props: ElementConfig<typeof components.DropdownIndicator>) => (
	<components.DropdownIndicator {...props}>
		<img src={arrow} alt="" />
	</components.DropdownIndicator>
);

class DefaultSelect extends React.Component {

	render() {
		const selectRef = createRef();
		return (
			<Select
				ref={selectRef}
				onChange={() => this.props.onChange(selectRef)}
				defaultValue={this.props.defaultValue}
				className="default-select"
				classNamePrefix="default-select"
				options={this.props.options}
				isSearchable={false}
				components={{ MenuList, Option: CustomOption, DropdownIndicator }}
			/>
		);
	}

}

MenuList.propTypes = {
	children: PropTypes.any.isRequired,
};

CustomOption.propTypes = {
	children: PropTypes.any.isRequired,
	innerProps: PropTypes.any.isRequired,
	isFocused: PropTypes.any.isRequired,
	isSelected: PropTypes.any.isRequired,
};

DefaultSelect.defaultProps = {
	defaultValue: null,
	options: null,
	onChange: null,
};
DefaultSelect.propTypes = {
	defaultValue: PropTypes.object,
	options: PropTypes.array,
	onChange: PropTypes.func,
};

export default DefaultSelect;
