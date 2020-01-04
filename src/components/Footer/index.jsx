import React from 'react';
import chrome from '../../assets/images/chrome.svg';

class Footer extends React.Component {

	render() {

		return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="ext">
								<span>Get</span>
								<span>&nbsp;extension</span>
								:
								<ul>
									<li>
										<a
											href="https://chrome.google.com/webstore/detail/echo-bridge/ginklfodpcgldnicehmlpehfmgjhbdcl"
											target="_blank"
											rel="noopener noreferrer"
										>
											<img src={chrome} alt="" />
										</a>
									</li>
									{/* <li>
										<a href=""><img src={firefox} alt="" /></a>
									</li> */}
								</ul>
							</div>
						</div>
						<div className="col">
							<span className="copyright">© Copyright 2020</span>
						</div>
					</div>
				</div>
			</footer>
		);
	}

}
export default Footer;
