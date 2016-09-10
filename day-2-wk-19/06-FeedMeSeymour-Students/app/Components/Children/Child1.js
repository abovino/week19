// Include React 
var React = require('react');

// Include Seymour Parent
var Parent = require("../Seymour")

// Create the Child1 Component
var Child1 = React.createClass({

	// Child1 has a state that follows the food of clicks
	getInitialState: function(){
		return {
			food: 25
		}
	},

	// Whenever the button is clicked we'll add to the Child1's click count. 
	// Then use the parent's feedSeymour function to set that as well. 
	handleClick: function(){
		this.props.feedSeymour(this.state.food);
	},

	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Mmm Mmm Good!</h3>
				</div>
				<div className="panel-body text-center">

					<h3>Human Flesh</h3>
					<img src="http://www.toxel.com/wp-content/uploads/2011/10/fear08.jpg" width="100%" onClick={this.handleClick} />

				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Child1;