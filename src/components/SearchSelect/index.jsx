/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { useRef } from 'react';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
import '../../../node_modules/react-perfect-scrollbar/dist/css/styles.min.css';
import Select, { components } from 'react-select';

const assetsOptions = [
	{
		label: '1',
	},
	{ label: '1' },
	{ label: '3' },
	{ label: '4' },
	{ label: '5' },
	{ label: '6' },
	{ label: '7' },
	{ label: '8' },
	{ label: '9' },
	{ label: '10' },
	{ label: '11' },
	{ label: '12' },
	{ label: 'Aruba' },
	{ label: 'Australia' },
	{ label: 'Austria' },
	{ label: 'Azerbaijan' },
	{ label: 'Bahamas' },
	{ label: 'Bahrain' },
].map((option) => ({
	value: option.label,
	label: option.label,
}));

const tokenOptions = [
	{
		label: '1',
	},
	{ label: '1' },
	{ label: '3' },
	{ label: '4' },
	{ label: '5' },
	{ label: '6' },
	{ label: '7' },
	{ label: '8' },
	{ label: '9' },
	{ label: '10' },
	{ label: '11' },
	{ label: '12' },
	{ label: 'Aruba' },
	{ label: 'Australia' },
	{ label: 'Austria' },
	{ label: 'Azerbaijan' },
	{ label: 'Bahamas' },
	{ label: 'Bahrain' },
].map((option) => ({
	value: option.label,
	label: option.label,
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

// const ControlComponent = (props) => (
// 	<components.Control {...props} className="select-control" />
// );

function MenuList(props) {
	return (
		<PerfectScrollbar>
			<div className="select-menu">
				{props.children}
			</div>
		</PerfectScrollbar>
	);
}

// const GroupHeading = (props) => (
// 	<components.GroupHeading {...props} className="select-group-header" />
// );
const scrollByKeyboard = (optionRef, props) => {
	const controlPanel = optionRef && optionRef.current && optionRef.current.closest('.search-select');
	const optionParent = optionRef && optionRef.current && optionRef.current.offsetParent;
	const optionOffset = optionRef && optionRef.current && optionRef.current.offsetTop;
	optionParent && controlPanel.addEventListener('keyup', () => {
		if (props.isFocused) {
			optionParent.scrollTop = optionOffset;
		}
	});
};

const CustomOption = ({
	children, innerRef, innerProps, data, ...props
}) => {
	const optionRef = useRef();
	scrollByKeyboard(optionRef, props);
	// const controlPanel = optionRef && optionRef.current && optionRef.current.closest('.search-select');
	// const optionParent = optionRef && optionRef.current && optionRef.current.offsetParent;
	// // const optionParentHeight = optionRef && optionRef.current && optionRef.current.closest('.select-menu').clientHeight;
	// const optionOffset = optionRef && optionRef.current && optionRef.current.offsetTop;
	// optionParent && controlPanel.addEventListener('keyup', () => {
	// 	if (props.isFocused) {
	// 		optionParent.scrollTop = optionOffset;
	// 	}
	// });

	return (
		<div ref={optionRef} {...innerProps} className={classnames('select-field')}>
			<span>{data.label}</span>
			<span>{data.sub}</span>
		</div>
	);
};

class IntegrationReactSelect extends React.Component {

	render() {
		return (
			<div>
				<Select
					classNamePrefix="search-select"
					menuIsOpen
					options={options}
					components={{
						MenuList,
						Option: CustomOption,
						DropdownIndicator: null,
					}}
					placeholder="Select multiple countries"
					isOptionDisabled={(option) => option.disabled}
					className="search-select"
				/>
			</div>
		);
	}

}

export default IntegrationReactSelect;
