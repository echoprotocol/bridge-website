import React, { Fragment, createRef, useRef } from 'react';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Select from 'react-select';
import PropTypes from 'prop-types';
import '../../../node_modules/react-perfect-scrollbar/dist/css/styles.min.css';


function MenuList(props) {
	return (
		<PerfectScrollbar className="select-scroll">
			<div className="select-menu">
				{props.children}
			</div>
		</PerfectScrollbar>
	);
}

const scrollByKeyboard = (optionRef, props) => {

	if (!optionRef || !optionRef.current) {
		return;
	}

	const optionParent = optionRef.current.offsetParent;

	if (!optionParent || !props.isFocused) {
		return;
	}

	const controlPanel = optionRef.current.closest('.search-select');
	const optionOffset = optionRef.current.offsetTop;

	controlPanel.addEventListener('keyup', () => {
		optionParent.scrollTop = optionOffset;
	});
};

const CustomOption = ({
	children, innerProps, data, ...props
}) => {
	const optionRef = useRef();
	scrollByKeyboard(optionRef, props);
	return (
		<div ref={optionRef} {...innerProps} className={classnames('select-field', { focus: props.isFocused }, { selected: props.isSelected })}>
			<span className="select-field-label">{data.label}</span>
			<span className="select-field-id">{data.id}</span>
		</div>
	);
};

const SingleValue = ({ selectProps, data }) => (
	<div className="selected-value">
		<span className="selected-value-label">{selectProps.getOptionLabel(data)}</span>
		<span className="selected-value-id">{data.id}</span>
	</div>
);


class SearchSelect extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isSearchEmpty: false,
		};
	}

	onKeyDown(selectRef) {
		const select = selectRef.current.select.controlRef.offsetParent;
		setTimeout(() => {
			const isSearchEmpty = select.querySelector('.search-select__menu-notice');

			const selectValue = select.querySelector('.search-select__input input').value.toLowerCase();
			const selectFields = [...select.querySelectorAll('.select-field-label')];
			selectFields.forEach((field) => {
				const fieldValue = field.innerText.toLowerCase();
				const index = fieldValue.indexOf(selectValue);
				if (index !== -1) {
					const firstValue = fieldValue.split('').slice(0, index).join('').toUpperCase();
					const higlightValue = fieldValue.split('').slice(index, index + selectValue.length).join('').toUpperCase();
					const secondValue = fieldValue.split('').slice(index + selectValue.length).join('').toUpperCase();
					const firstEl = document.createElement('span');
					firstEl.innerText = firstValue;
					const highlightEl = document.createElement('span');
					highlightEl.classList.add('hightlight');
					highlightEl.innerText = higlightValue;
					const secondEl = document.createElement('span');
					secondEl.innerText = secondValue;
					while (field.firstChild) {
						field.removeChild(field.firstChild);
					}
					field.append(firstValue, highlightEl, secondEl);
				}
			});
			this.setState({
				isSearchEmpty: !!isSearchEmpty,
			});
			if (isSearchEmpty) {
				select.classList.add('error');
			} else {
				select.classList.remove('error');
			}
		}, 0);
	}

	onBlur(selectRef) {
		const select = selectRef.current.select.controlRef.offsetParent;
		const isError = select.classList.contains('error');
		if (isError) {
			select.classList.remove('error');
			this.setState({
				isSearchEmpty: false,
			});
		}
	}

	render() {
		const selectRef = createRef();
		const { options } = this.props;
		return (
			<Fragment>
				<label htmlFor="react-select-2-input" className="label"> Currency </label>
				<Select
					ref={selectRef}
					onKeyDown={() => this.onKeyDown(selectRef)}
					onBlur={() => this.onBlur(selectRef)}
					isClearable
					classNamePrefix="search-select"
					options={options}
					components={{
						MenuList,
						SingleValue,
						Option: CustomOption,
						DropdownIndicator: null,
					}}
					placeholder="Select item"
					className="search-select"
					defaultValue={options[0].options[0]}
				/>
				<div className={classnames('error-message', { active: this.state.isSearchEmpty })}>Invalid currency</div>
			</Fragment>
		);
	}

}

CustomOption.propTypes = {
	children: PropTypes.any.isRequired,
	innerProps: PropTypes.any.isRequired,
	data: PropTypes.any.isRequired,
};

MenuList.propTypes = {
	children: PropTypes.any.isRequired,
};

SingleValue.propTypes = {
	selectProps: PropTypes.any.isRequired,
	data: PropTypes.any.isRequired,
};

SearchSelect.propTypes = {
	options: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
	]).isRequired,
};

export default SearchSelect;
