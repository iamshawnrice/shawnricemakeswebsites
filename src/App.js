import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import data from './data';
import utils from './utils';

import ScrollManager from './components/scrollmanager';

import Header from './components/header';
import Footer from './components/footer';
import Introduction from './components/introduction';
import Portfolio from './components/portfolio/portfolio';
import PortfolioItem from './components/portfolio/portfolioitem';
import About from './components/about';

const customHistory = createBrowserHistory();
const ga = window.ga || null;

if (ga !== null) {
	customHistory.listen((location, action) => {
		ga('send', {
			hitType: 'pageview',
			page: location.pathname
		});
	});
}

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

	renderAbout() {
		return <About data={data.pages.about} />
	}

	renderIntroduction() {
		return <Introduction data={data.pages.introduction} />
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
				<Router history={customHistory}>
					<div>
						<ScrollManager />

						<Header ismobile={this.state.isMobile}/>

						<Route path="/" exact render={this.renderIntroduction.bind(this)} />
						<Route path="/portfolio/" exact render={this.renderPortfolio.bind(this)} />
						<Route path="/portfolio/:id" render={this.renderPortfolioItem.bind(this)} />
						<Route path="/about" exact render={this.renderAbout.bind(this)} />

						<Footer ismobile={this.state.isMobile}/>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
