import React from 'react';
import Qr from '../Qr';
import widget from '../../assets/images/temp/widget.svg';

class HowTo extends React.Component {

	render() {

		return (
			<section className="how-to-section">
				<div className="container">
					<div className="how-to-wrap">
						<div className="how-to-header">
							<span>How to</span>
						</div>

						<div className="how-to-title">
							Generate &quot;request QR code&quot;
							<br />with Bridge
						</div>

						<div className="how-to-row">
							<div className="column">
								<div className="code-example">
									<div className="title">Code</div>
									<div className="code">
										{'https://echo-bridge.io/receive/{receiver-account-name}/'}
										{'{“asset” || “token”}-{id-asset-or-id-token-contract-without-prefix}'}
										{'/{amount-without-delimeter}/qr-code.png'}
									</div>
									<div className="fields">
										<div className="field">
											<div className="argument">
												{'{receiver-account-name}'}
											</div>
											<div className="type">required field</div>
										</div>

										<div className="field">
											<div className="argument">
												{'{“asset” || “token”}-{id-asset-or-id-token-contract-without-prefix}'}
											</div>
											<div className="type">optional field</div>
										</div>
										<div className="field">
											<div className="argument">
												{'{amount-without-delimeter}'}
											</div>
											<div className="type">optional field</div>
										</div>
									</div>
									<div className="fields-hints">
										<div className="hint">
											You can replace optional fields with &quot;-&quot;
										</div>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="code-example">
									<div className="title">Example</div>
									<div className="code">
										https://echo-bridge.io/receive/testaccount/asset-14/-/qr-code.png
									</div>
									<Qr />
								</div>
							</div>
						</div>

						<div className="how-to-title">
							GET Widget
							<br />&quot;request QR code&quot;
						</div>

						<div className="how-to-row">
							<div className="column">
								<div className="code-example">
									<div className="title">Code</div>
									<div className="code">
										{'https://echo-bridge.io/receive/{receiver-account-name}/'}
										{'{“asset” || “token”}-{id-asset-or-id-token-contract-without-prefix}'}
										{'/{amount-without-delimeter}/widget'}
									</div>
									<div className="fields">
										<div className="field">
											<div className="argument">
												{'{receiver-account-name}'}
											</div>
											<div className="type">required field</div>
										</div>

										<div className="field">
											<div className="argument">
												{'{“asset” || “token”}-{id-asset-or-id-token-contract-without-prefix}'}
											</div>
											<div className="type">optional field</div>
										</div>
										<div className="field">
											<div className="argument">
												{'{amount-without-delimeter}'}
											</div>
											<div className="type">optional field</div>
										</div>
									</div>
									<div className="fields-hints">
										<div className="hint">
											You can replace optional fields with &quot;-&quot;
										</div>
									</div>
								</div>
							</div>
							<div className="column">
								<div className="code-example">
									<div className="title">Example</div>
									<div className="code">
										https://echo-bridge.io/receive/testaccount/asset-14/-/widget
									</div>
									<div className="widget">
										<img src={widget} alt="widget" />
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
		);
	}

}
export default HowTo;
