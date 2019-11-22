import React from 'react';
import chrome from '../../assets/images/chrome.svg';
import firefox from '../../assets/images/firefox.svg';

class Footer extends React.Component {

	render() {

		return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="ext">
							Get extension:
								<ul>
									<li>
										<a href=""><img src={chrome} alt="" /></a>
									</li>
									<li>
										<a href=""><img src={firefox} alt="" /></a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col">
							<span className="copyright">© Copyright 2019</span>
						</div>
					</div>
				</div>
			</footer>
		);
	}

}
export default Footer;
