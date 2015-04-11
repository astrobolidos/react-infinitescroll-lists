window.React = require('react');
require('../styles/site.scss');

var React = require('react');  

var SideBar = React.createClass({
	render: function() {
		return (
			<div className="sideBar col-1-5 ">
				{this.props.children}
			</div>
		)
	}
}); 

var Content = React.createClass({
	render:function() {
		var items = []
		for(i=0; i < 30; i++)
			items.push({name:'Item' + i})

		var createItems = function(item, i) {
				return <div key={i}>Item {i}</div>
		}

		return <main className="HolyGrail-content">
			
				{items.map(createItems)}
			
		</main>
	}
});


var App = React.createClass({
	render: function() {
		return (
		<div className="HolyGrail">
		  <header>header</header>
		  <div className="HolyGrail-body">
		  	<Content />  
		    <nav className="HolyGrail-nav">navigation</nav>
		  </div>
		  <footer><div>footer</div></footer>
		</div>
		)
	}
});



React.render(<App />, document.body);