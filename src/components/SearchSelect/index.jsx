/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { createRef, useRef } from 'react';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
import '../../../node_modules/react-perfect-scrollbar/dist/css/styles.min.css';
import Select from 'react-select';

const assetsOptions = [
	{
		label: 'BTS',
		id: '1.3.8',
	},
	{
		label: 'BST',
		id: '1.3.5',
	},
	{
		label: 'BUS',
		id: '1.4.8',
	},
	{
		label: 'BUZ',
		id: '1.2.4',
	},
	{
		label: 'FIZ',
		id: '5.2.1',
	},
].map((option) => ({
	value: option.label,
	label: option.label,
	id: option.id,
}));

const tokenOptions = [
	{
		label: 'BTC',
		id: '1.3.8',
	},
	{
		label: 'PST',
		id: '1.3.5',
	},
	{
		label: 'BLS',
		id: '1.4.8',
	},
	{
		label: 'BUZ',
		id: '1.2.4',
	},
	{
		label: 'FIZ',
		id: '5.2.1',
	},
].map((option) => ({
	value: option.label,
	label: option.label,
	id: option.id,
}));

const options = [
	{
		label: 'Tokens',
		options: tokenOptions,
	},
	{
		label: 'Assets',
		options: assetsOptions,
	},
];

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
	children, innerRef, innerProps, data, ...props
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


class IntegrationReactSelect extends React.Component {

	state={
		isSearchEmpty: false,
	}

	onKeyDown = (selectRef) => {
		const select = selectRef.current.select.controlRef.offsetParent;
		setTimeout(() => {
			const isSearchEmpty = select.querySelector('.search-select__menu-notice');

			const selectValue = select.querySelector('.search-select__input input').value.toLowerCase();
			const selectFields = [...select.querySelectorAll('.select-field-label')];
			selectFields.forEach((field) => {
				const fieldValue = field.innerText.toLowerCase();
				const index = fieldValue.indexOf(selectValue);
				if (index !== -1 ) {
					const firstValue = fieldValue.split('').slice(0, index).join('').toUpperCase();
					const higlightValue=fieldValue.split('').slice(index, index + selectValue.length).join('').toUpperCase();
					const secondValue = fieldValue.split('').slice(index + selectValue.length).join('').toUpperCase();
					const firstEl=document.createElement('span');
					firstEl.innerText = firstValue;
					const highlightEl=document.createElement('span');
					highlightEl.classList.add('hightlight');
					highlightEl.innerText = higlightValue;
					const secondEl = document.createElement('span');
					secondEl.innerText = secondValue;
					while (field.firstChild) {
						field.removeChild(field.firstChild);
					}
					field.append(firstValue, highlightEl, secondEl)
				}
			})
			this.setState({
				isSearchEmpty: !!isSearchEmpty,
			});
			if (isSearchEmpty) {
				select.classList.add('error')
			}
			else {
				select.classList.remove('error');
			}
		}, 0);
	};

	onBlur = (selectRef) => {
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
		const { classNameWrap } = this.props;
		return (
			<div className={classNameWrap}>
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
			</div>
		);
	}

}

export default IntegrationReactSelect;
