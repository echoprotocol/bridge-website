import React from 'react';

import About from '../../components/About';
import Example from '../../components/Example';
import RequestWidget from '../../components/RequestWidget';
import RequestQr from '../../components/RequestQr';
import Explaining from '../../components/Explaining';
import Info from '../../components/Info';
import Footer from '../../components/Footer';

class Index extends React.Component {

	render() {

		return (
			<React.Fragment>
				<About />
				<Example />
				<RequestWidget />
				<RequestQr />
				<Explaining />
				<Info />
				<Footer />
			</React.Fragment>
		);
	}

}

export default Index;
