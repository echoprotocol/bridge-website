import React from 'react';
import qr from '../../assets/images/temp/qr-green.jpg';

class Qr extends React.Component {

	render() {
		return (
			<div className="qr">
				<img src={qr} alt="qr" />
			</div>
		);
	}

}


export default Qr;
