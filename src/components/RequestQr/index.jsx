import React, { Fragment } from 'react';
import CopyButton from '../CopyButton';
import QrGenerator from '../QrGenerator';
import Media from 'react-media';

const RequestQr = () => (
	<section className="request-qr">
		<div className="container">
			<h3 className="request-qr-title">GENERATE PAYMENT REQUEST QR CODE</h3>
			<div className="qr-generator-wrap">
				<QrGenerator />
			</div>
			<div className="request-qr-field">
				<h5 className="title">
					You can use the following URL to generate a payment request QR code:
				</h5>

				<div className="field-label">
					URL
				</div>
				<Media queries={{
					medium: '(min-width: 501px) and (max-width: 1200px)',
				}}
				>
					{(matches) => (
						<Fragment>
							{matches.medium &&
								<span className="field-item prefix">https://echo-bridge.io/receive/</span>
							}
						</Fragment>
					)}
				</Media>
				<div className="field">
					<Media queries={{
						large: '(min-width: 1201px)',
						small: '(max-width:500px)',
					}}
					>
						{(matches) => (
							<Fragment>
								{matches.large &&
									<span className="field-item prefix">https://echo-bridge.io/receive/</span>
								}
								{matches.small &&
									<span className="field-item prefix">https://echo-bridge.io/receive/</span>}
							</Fragment>
						)}
					</Media>
					<span className="field-item account">
						<span>{'{account}'}</span>
						<span className="field-item-mark">1</span>
					</span>
					<span className="field-divider">/</span>
					<span className="field-item currency">
						<span>{'{“asset”||“token”}'}</span>
						<span className="field-item-mark">2.1</span>
					</span>
					<span className="field-divider">-</span>
					<span className="field-item id">
						<span>{'{currency-id-without-prefix}'}</span>
						<span className="field-item-mark">2.2</span>
					</span>
					<span className="field-divider">/</span>
					<span className="field-item amount">
						<span>{'{amount-without-delimeter}'}</span>
						<span className="field-item-mark">3</span>
					</span>
					<Media queries={{
						large: '(min-width: 925px)',
						small: '(max-width: 500px)',
					}}
					>
						{(matches) => (
							<Fragment>
								{matches.large &&
									<span className="field-item postfix">/qr-code.png</span>
								}
								{matches.small &&
									<span className="field-item postfix">/qr-code.png</span>
								}
							</Fragment>
						)}
					</Media>
					<Media
						query="(min-width: 769px)"
						render={() =>
							(
								<span className="field-copy">
									<CopyButton color="#ABB2B4" value={'https://echo-bridge.io/receive/{account}/{“asset”||“token”}-{currency-id-without-prefix}/{amount-without-delimeter}/qr-code.png'} />
								</span>
							)}
					/>
				</div>
				<Media queries={{
					medium: '(min-width: 501px) and (max-width: 924px)',
				}}
				>
					{(matches) => (
						<Fragment>
							{matches.medium &&
							<span className="field-item postfix">/qr-code.png</span>
							}
						</Fragment>
					)}
				</Media>
				<Media queries={{
					medium: '(min-width: 501px) and (max-width: 768px)',
				}}
				>
					{(matches) => (
						<Fragment>
							{matches.medium &&
								<span className="field-copy">
									<CopyButton color="#ABB2B4" value={'https://echo-bridge.io/receive/{account}/{“asset”||“token”}-{currency-id-without-prefix}/{amount-without-delimeter}/qr-code.png'} withText />
								</span>
							}
						</Fragment>
					)}
				</Media>
			</div>
			<div className="request-qr-description">
				<h4 className="title">Parameter description</h4>
				<div className="description-item">
					<div className="description-item-parameter">
						<span>1.</span>
						<span style={{ color: '#5D51A9' }}>{'{account}'}</span>
					</div>
					<ul className="description-item-info">
						<li>The name of the account the funds will be transferred to.</li>
						<li>
							<span className="italic">Example:</span> testaccount.
						</li>
						<li>Required field.</li>
					</ul>
				</div>
				<div className="description-item">
					<div className="description-item-parameter">
						<span>2.1</span>
						<span style={{ color: '#13BD95' }}>{'{“asset”||“token”}'}</span>
					</div>
					<ul className="description-item-info">
						<li>The asset or token by which the funds will be transferred.</li>
						<li>Optional field.</li>
					</ul>
				</div>
				<div className="description-item">
					<div className="description-item-parameter">
						<span>2.2</span>
						<span style={{ color: '#C923AC' }}>{'{currency-id-without-prefix}'}</span>
					</div>
					<ul className="description-item-info">
						<li>Asset or token ID is specified without prefix.</li>
						<li>
							<span className="italic">Example:</span> asset-0 for ECHO asset.
						</li>
						<li>Optional field.</li>
					</ul>
				</div>
				<div className="description-item">
					<div className="description-item-parameter">
						<span>3</span>
						<span style={{ color: '#B08E17' }}>{'{amount-without-delimeter}'}</span>
					</div>
					<ul className="description-item-info">
						<li>The amount of funds to be transferred. Amount is specified without delimiters.</li>
						<li>
							<span className="italic">Example:</span> 1000.
						</li>
						<li>Optional field.</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);


export default RequestQr;
