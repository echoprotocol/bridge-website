import React from 'react';

const Explaining = () => (
	<section className="explaining">
		<div className="container">
			<h3 className="h3 title">
				HOW BRIDGE WORKS WITH KEYS AND WHY IT IS SECURE
			</h3>
			<p className="text">Bridge stores keys in the browser’s ‘storage.local’.</p>
			<p className="text">For encryption purposes, Bridge uses scrypt, a password-based key derivation function specifically designed to make it costly to perform large-scale brute-force attacks, in combination with AES encryption. AES (Advanced Encryption Standard) is a US federal government standard approved by the NSA for encrypting top secret information. This combination makes brute-force attacks nearly impossible.</p>
			<p className="text">{'A pin is used and fed in to scrypt to extract a random string from storage and decrypt it. Based on this random string, Bridge uses AES to encrypt all data and account keys and stores it via storage.local. The pin isn\'t stored anywhere and is only used for extracting random strings'}</p>
		</div>
	</section>
);

export default Explaining;
