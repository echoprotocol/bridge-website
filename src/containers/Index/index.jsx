import React from 'react';

import About from '../../components/About';
import Process from '../../components/Process';
import Example from '../../components/Example';
import Info from '../../components/Info';
import Footer from '../../components/Footer';


class Index extends React.Component {

	render() {

		return (
			<React.Fragment>
				<About />
				<Process />
				<Example />
				<Info />
				<Footer />

			</React.Fragment>
		);
	}

}

export default Index;
