import React from 'react';
import CopyButton from '../CopyButton';
import QrGenerator from '../QrGenerator';

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
				<div className="field">
					<span className="field-item prefix">https://echo-bridge.io/receive/</span>
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
					<span className="field-item postfix">/qr-code.png</span>
					<span className="field-copy">
						<CopyButton color="#ABB2B4" value={'https://echo-bridge.io/receive/{account}/{“asset”||“token”}-{currency-id-without-prefix}/{amount-without-delimeter}/qr-code.png'} />
					</span>
				</div>
			</div>
			<div className="request-qr-description">
				<h5 className="title">Parameter description</h5>
				<div className="description-item">
					<div className="description-item-parameter">
						<span>1.</span>
						<span style={{ color: '#5D51A9' }}>{'{account}'}</span>
					</div>
					<ul className="description-item-info">
						<li>The name of the account the funds will be transferred to.</li>
						<li>
							<span className="thin">Example:</span> testaccount.
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
							<span className="thin">Example:</span> asset-0 for ECHO asset.
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
							<span className="thin">Example:</span> 1000.
						</li>
						<li>Optional field.</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
);


export default RequestQr;
