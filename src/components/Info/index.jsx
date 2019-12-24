import React from 'react';

class Info extends React.Component {

	render() {

		return (
			<section className="info-section">
				<div className="container">
					<div className="row">
						<div className="col" />
						<div className="col">
							<h3 className="h3 info-title">
								Learn More About EChO
							</h3>
							<p className="info-description">
								Echo is a generalized smart contract protocol that enables
								efficient decentralized computing.
							</p>
							<a href="https://dev.echo.org/" className="btn-light" target="_blank" rel="noopener noreferrer">
								<span className="text">Visit Website</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}

}
export default Info;
