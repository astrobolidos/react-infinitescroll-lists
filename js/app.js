window.React = require('react/addons');
require('../styles/site.scss');

var React 			= require('react/addons');  
var ItemList		= require('./components/itemList');
var Indicators	= require('./components/indicators');

var App = React.createClass({
	render: function() {
		return (
		<div className="HolyGrail">
		  <header>
		  	<Indicators />
		  </header>
		  <div className="HolyGrail-body">
		  	<main className="HolyGrail-content">
		  		<ItemList />
		  	</main>
		    <nav className="HolyGrail-nav">navigation</nav>
		  </div>
		  <footer><div>footer</div></footer>
		</div>
		)
	}
});



React.render(<App />, document.body);