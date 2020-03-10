import React from 'react';
import chrome from '../../assets/images/chrome.svg';
import bidge from '../../assets/images/logo.svg';
import brgScreens from '../../assets/images/brg-screens.png';
import brgScreens1600 from '../../assets/images/brg-screens-1600.png';
import brgScreens1400 from '../../assets/images/brg-screens-1400.png';
import brgScreens1000 from '../../assets/images/brg-screens-1000.png';

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
							<div className="about-buttons">
								<a href="https://chrome.google.com/webstore/detail/echo-bridge/ginklfodpcgldnicehmlpehfmgjhbdcl" className="btn-light with-icon" target="_blank" rel="noopener noreferrer">
									<span className="icon">
										<img src={chrome} alt="chrome" />
									</span>
									<span className="text">Get Chrome Extension</span>
								</a>
								{/* <button className="btn-light with-icon">
									<span className="icon">
										<img src={firefox} alt="firefox" />
									</span>
									<span className="text">Get Firefox Extension</span>
								</button> */}
							</div>
						</div>
						<div className="column" >
							<div className="brg-screens">
								<picture>
									<source media="(max-width: 1000px)" srcSet={brgScreens1000} />
									<source media="(max-width: 1400px)" srcSet={brgScreens1400} />
									<source media="(max-width: 1600px)" srcSet={brgScreens1600} />
									<img src={brgScreens} alt="" />
								</picture>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}
export default About;
