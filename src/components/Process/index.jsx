import React from 'react';

import arrow from '../../assets/images/arrow.svg';
import step1 from '../../assets/images/step1.svg';
import step2 from '../../assets/images/step2.svg';
import step3 from '../../assets/images/step3.svg';


class Process extends React.Component {

	render() {

		return (
			<section className="process-section">
				<div className="container">
					<h2 className="section-title">HOW IT WORKS</h2>
					<div className="steps">
						<div className="step one">
							<img src={step1} alt="" />
							<div className="caption">
								<h4 className="title">Step 1</h4>
								<p className="description">Create Transaction</p>
							</div>
						</div>
						<img className="arrow" src={arrow} alt="" />
						<div className="step two">
							<img src={step2} alt="" />
							<div className="caption">
								<h4 className="title">Step 2</h4>
								<p className="description">Sign Transaction</p>
							</div>
						</div>
						<img className="arrow" src={arrow} alt="" />
						<div className="step three">
							<img src={step3} alt="" />
							<div className="caption">
								<h4 className="title">Step 3</h4>
								<p className="description">Send Transaction</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}
export default Process;
