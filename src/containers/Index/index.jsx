import React from 'react';

import About from '../../components/About';
// import Process from '../../components/Process';
import HowTo from '../../components/HowTo';
import Example from '../../components/Example';
import Info from '../../components/Info';
import Footer from '../../components/Footer';
import RequestWidget from '../../components/RequestWidget';


class Index extends React.Component {

	render() {

		return (
			<React.Fragment>
				<About />
				{/* <Process /> */}
				<Example />
				<RequestWidget />
				<HowTo />
				<Info />
				<Footer />
			</React.Fragment>
		);
	}

}

export default Index;
