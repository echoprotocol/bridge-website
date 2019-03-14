import React from 'react';
import chrome from '../../assets/images/chrome.svg';
import firefox from '../../assets/images/firefox.svg';
import bidge from '../../assets/images/logo.svg';
import brgScreens from '../../assets/images/brg-screens.png';


class About extends React.Component {

	render() {

		return (
			<section className="about-section">
				<div className="container">
					<div className="about-wrap">
						<div className="column">
							<img className="logo" src={bidge} alt="Bidge" />
							<h4 className="tagline">Brings ECHO to your browser</h4>
							<div className="prezentation">
								<p>
								Bridge is a tool designed to make running Echo dApps for people as
								easy as possible.
								</p>
								<p>
								As an extension for your browser, Bridge can act as a dedicated
								Echo wallet, allowing you to access and manage your account data,
								manage multiple accounts, and use it for making, signing
								transactions & viewing your account history.
								</p>
							</div>
							<div className="btn-wrap-2">
								<button className="btn-light">
									<span className="icon">
										<img src={chrome} alt="chrome" />
									</span>
									<span className="text">Get Chrome Extension</span>
								</button>
								<button className="btn-light">
									<span className="icon">
										<img src={firefox} alt="firefox" />
									</span>
									<span className="text">Get Firefox Extension</span>
								</button>
							</div>
						</div>
						<div className="column" >


							<div className="brg-screens">
								<img src={brgScreens} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}
export default About;
