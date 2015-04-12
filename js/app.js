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
	getInitialState: function() {
		return { items: []}
	},
	componentDidMount: function() {
		var list = this.state.items;
		for(i=0; i < 4; i++)
			list.push({name:'Item' + i});

		this.setState({items: list});		
	},
	handleClick: function(e) {
		console.log('click');
		var list = this.state.items;
		list.push({name:'Item' + list.length});

		this.setState({items: list});		
	},
	handleItemClick: function(index, e) {
		e.stopPropagation();
		e.preventDefault();
		var list = this.state.items;
		list.splice(index, 1);
		this.setState({items:list});
	},
	render:function() {
		var component = this;
		var createItems = function(item, i) {
				return <li key={i} onClick={component.handleItemClick.bind(component, i)}>{item.name}</li>
		}

		return <main className="HolyGrail-content">
			<ul className="box" onClick={this.handleClick}>
				{this.state.items.map(createItems)}
			</ul>
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