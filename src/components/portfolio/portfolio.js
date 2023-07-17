import React from 'react';

import styled from 'styled-components';

const PortfolioSection = styled.div`
	width: auto;
	max-width: ${props => props.theme.paragraphMaxWidth};
	margin: 8rem auto 2rem;
	font-family: ${props => props.theme.serif};
	padding: 6rem 4rem;
	position: relative;

    h2, h3 {
        line-height: 2;
    }

	p, ul {
		font-size: 1.75rem;
        line-height: 1.5;
        margin-bottom: 2rem;
	}

    ul {
        font-family: ${props => props.theme.sans};
    }

	a {
		text-decoration: none;
		color: ${props => props.theme.blue};

		&:hover {
			color: ${props => props.theme.orange};
		}
	}

	@media (max-width: ${props => props.theme.bpSmall}) {
		width: 100%;
		margin: 3rem auto 0;
		padding: 3rem 2rem 2rem;
		text-align: left;

		p {
			line-height: 1.5;
			font-size: 2rem;
		}
	}
`;

const Portfolio = () => {
    return (
        <PortfolioSection>
            <h1>Well...this is embarrassing</h1>

            <p>Like many in the enterprise world, my work for the last six or so years has been cloistered behind paywalls. And while, I stand behind (nearly) every bit of code I've ever shipped, flexing projects I did before 2017 would not be an accurate representation of my current skill set.</p>

            <p>So in lieu of a bunch of sites that aren't even accessible on public servers anymore, I present some of my thoughts/philosophies/opinions with regard to making things happen with code.</p>

            <h2>Opinions</h2>

            <h3>General</h3>

            <ul>
                <li>Simple &gt; Clever 99.9% of the time.</li>
            </ul>

            <h3>HTML</h3>

            <ul>
                <li>Acccessibility matters</li>
                <li>Less markup is usually better than more.</li>
            </ul>

            <h3>CSS</h3>

            <ul>
                <li>Only be as specific as you need to be.</li>
                <li>If your selector is more than 4 elements long, there is probably an opportunity to simplify.</li>
                <li>BEM is good.</li>
            </ul>

            <h3>JavaScript</h3>

            <ul>
                <li>Functional Programming is easier to test and maintain.</li>
                <li>Self-describing code is better than comments most of the time.</li>
                <li>Keep your modules small.</li>
                <li>Test coverage is not optional - especially when facing a deadline.</li>
            </ul>

            <h3>TypeScript</h3>

            <ul>
                <li>Compile time code safety is good. Run time code safety is better. Having both is key.</li>
                <li>TypeScript in test files is usually overkill and unnecessarily complicates covering edge cases.</li>
            </ul>

            <p>All in all, I am pro-TypeScript. It makes refactoring a breeze and helps eliminate stupid mistakes. But I feel there is a point where it stops boosting developer velocity and starts to hinder it. I’m not sure where that point is, but I think it tends to happen when people are being too clever with it. Or maybe the APIs it’s trying to protect are too flexible and that’s where the janky developer experience comes from. Either way, keep it simple.</p>

            <h3>React</h3>

            <ul>
                <li>Keep your components small.</li>
                <li>Keep your project organized as flatly as possible.</li>
                <li>Don’t use 3rd party libraries unless truly necessary.</li>
                <li>Don’t use React to do what the browser can do for you.</li>
                <li>Check for performance issues early and often.</li>
                <li>Thunks are easier to reason about than epics.</li>
                <li>CssModules &gt; any other styling method</li>
            </ul>

            <h3>Other/Misc</h3>

            <ul>
                <li>Everybody has time to help. Everybody is entitled to ask for help.</li>
                <li>Read the error message. Google the error message.</li>
                <li>Rubber-stamping PRs will bite you in the ass.</li>
                <li>QA’s primary job is user advocate.</li>
                <li>Engineers are terrible at estimating how long something is going to take to finish. We are far better at estimating how long something is going to take to submit to QA.</li>

            </ul>
        </PortfolioSection>
    );
}

export default Portfolio;