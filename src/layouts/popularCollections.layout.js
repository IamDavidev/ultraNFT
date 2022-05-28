import { LitElement, html, css } from 'lit';

import '../components/collection.component.js';

import rocket from '../assets/icons/RocketLaunch.svg';

export const tagName = 'popular-collections';
export class PopularCOllections extends LitElement {
	static styles = [
		css`
			:host {
				display: block;
			}
			.collectionPopular {
				margin: 80px 0;

			}
			.collectionPopular > header {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				flex-wrap: wrap;
				margin-bottom:20px;
			}
			.collectionPopular > header > h2 {
				font-size: 4rem;
				margin: 12px 0;
				font-weight: bold;
				color: #fff;
			}
			.collectionPopular > header > button {
				display: flex;
				flex-direction: row;
				align-items: center;
				border-radius: 12px;
				padding: 1rem 1.5rem;
				border: none;
				background: var(--rose--compact);
				color: var(--color--primary);
				font-size: 1.1rem;
				font-weight: bold;
			}
			.contentCollection {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				gap: 30px;
			}
			@media (min-width:200px) and (max-width:600px){
				.collectionPopular > header > h2 {
					font-size: 3rem;

				}
				.contentCollection{
					padding:3rem;
				}
			}
		`,
	];

	render() {
		return html`
			<section class="collectionPopular">
				<header>
					<h2>Popular Collections</h2>
					<button>
						<img src="${rocket}" alt="" />
						<span> Explore All </span>
					</button>
				</header>
				<div class="contentCollection">
					<collection-nfts></collection-nfts>
					<collection-nfts></collection-nfts>
					<collection-nfts></collection-nfts>
				</div>
			</section>
		`;
	}
}
customElements.define(tagName, PopularCOllections);
