import React from 'react';

class Info extends React.Component {

	render() {

		return (
			<section className="info-section">
				<div className="container">
					<div className="row">
						<div className="col" />
						<div className="col">
							<h3 className="info-title">
								Learn More About EChO
							</h3>
							<p className="info-description">
								Echo is a generalized smart contract protocol that enables
								efficient decentralized computing.
							</p>
							<button className="btn-light">
								<span className="text">Visit Website</span>
							</button>
						</div>
					</div>
				</div>
			</section>
		);
	}

}
export default Info;
