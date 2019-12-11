import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Highlight from 'react-highlight';

import git from '../../assets/images/git.svg';


class Example extends React.Component {

	render() {

		return (
			<section className="example-section">
				<div className="container">
					<div className="row">
						<div className="col ">
							<div className="example-info">
								You can allow making transactions and calling smart contracts on your web application. Users will be able to sign transactions using Bridge
							</div>
							<div className="github-wrap">
								<div className="github">
									<img src={git} alt="" className="logo" />
									<span>We are on Github</span>
								</div>
								<button className="btn-primary">
									<span className="text">Get started</span>
								</button>
							</div>
						</div>
						<div className="col" >
							<div className="code-label">Example</div>
							<PerfectScrollbar
								className="example-code-scroll"
							>
								<Highlight className="javascript">
									{
										`
window.onload = () => {


  if (echojslib && echojslib.isEchoBridge) {


    /**

    * Subscribe to current Echo network selected in Bridge

    */

    echojslib.extension.subscribeSwitchNetwork(async () => {


      if (echojslib.echo.isConnected) {

        await window.echojslib.echo.disconnect();

      }


      /**

      * Connect to current Echo network selected in Bridge

      */

      await echojslib.echo.connect();

      /**

      * Create a transaction

      * @type {Transaction}

      */

      const transaction = echojslib.echo.createTransaction();


      /**

      * Add transfer operation

      */

      transaction.addOperation(echojslib.constants.OPERATIONS_IDS.TRANSFER,  {

        from:  "1.2.1",

        to:  "1.2.2",

        amount:  {

          asset_id: "1.3.0",

          amount:  10

        }

      });


      /**

      * Sign the transaction with Bridge

      */

      await transaction.signWithBridge();


      /**

      * Broadcast the transaction to blockchain

      */

      await transaction.broadcast();

    });

  }

};
									`
									}
								</Highlight>
							</PerfectScrollbar>
						</div>
					</div>
				</div>
			</section>
		);
	}

}
export default Example;
