import { LitElement, html, css } from 'lit';
import '../components/cardNFt.component.js';

import rocket from '../assets/icons/RocketLaunch.svg';

export const tagName = 'actions-layout';
export class Actions extends LitElement {
	static styles = [
		css`
			:host {
				display: block;
			}

			.container {
				margin: 80px 0;
				display: flex;
				flex-direction: column;
				gap: 12px;
			}
			.header {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;
			}
			.header > h2 {
				font-size: 4rem;
				margin: 12px 0;
				font-weight: bold;
				color: #fff;
			}
			.header > button {
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
			.contentCards {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
			}
			.navigation {
				margin-top: 12px;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: 12px;
			}
			.navigation > button {
				border-radius: 50%;
				border: none;
				width: 12px;
				height: 12px;
				border: 1px solid var(--color--primary);
				background: transparent;
			}
			.navigation > button:nth-child(2) {
				background: var(--color--primary);
				width: 18px;
				height: 18px;
			}
		`,
	];

	render() {
		return html`
			<section class="container">
				<div class="header">
					<h2>Live Auctions</h2>
					<button>
						<img src="${rocket}" alt="rocket" /><span>Explore All</span>
					</button>
				</div>
				<div class="contentCards">
					<card-nft
						time="12d 13h 56m"
						price="4"
						userName="David Lezama"
						nft="main"
						crows="45"
						like="666"
					></card-nft>
					<card-nft
						time="12d 13h 56m"
						price="5"
						userName="DLT"
						nft="hands"
						crows="4"
						like="753"
					></card-nft>
					<card-nft
						time="12d 13h 56m"
						price="98"
						userName="John Doe"
						nft="rocket"
						crows="8"
						like="534"
					></card-nft>
					<card-nft
						time="12d 13h 56m"
						price="98"
						userName="John Doe"
						nft="rocket"
						crows="8"
						like="534"
					></card-nft>
				</div>
				<div class="navigation">
					<button></button>
					<button></button>
					<button></button>
					<button></button>
					<button></button>
				</div>
			</section>
		`;
	}
}
customElements.define(tagName, Actions);
