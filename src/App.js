import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import data from './data';
import utils from './utils';

import ScrollManager from './components/scrollmanager';

import Header from './components/header';
import Footer from './components/footer';
import Portfolio from './components/portfolio/portfolio';
import PortfolioItem from './components/portfolio/portfolioitem';
import About from './components/about';

class App extends React.Component {
	state = {
		isMobile: utils.isMobile()
	}

	renderPortfolio() {
		return <Portfolio items={data.portfolio.items} />;
	}

	renderPortfolioItem(args) {
		return <PortfolioItem item={data.portfolio.items[args.match.params.id]} />;
	}

	renderAboutPage() {
		return <About data={data.pages.about} />
	}

	recalculateWindowWidth() {
		this.setState(prevState => Object.assign({}, prevState, {isMobile: utils.isMobile()}));
	}

	componentDidMount() {
		window.addEventListener('resize', this.recalculateWindowWidth.bind(this));
	}

	render() {
		return (
			<div>
				<Router>
					<div>
						<ScrollManager />

						<Header ismobile={this.state.isMobile}/>

						<Route path="/portfolio/" exact render={this.renderPortfolio.bind(this)} />
						<Route path="/portfolio/:id" render={this.renderPortfolioItem.bind(this)} />
						<Route path="/about" exact render={this.renderAboutPage.bind(this)} />

						<Footer ismobile={this.state.isMobile}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
