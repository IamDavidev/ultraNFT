import { LitElement, html, css } from 'lit';

import loadMore from '../assets/icons/loadMore.svg';

export const tagName = 'today-pics';
export class Pics extends LitElement {
	static styles = [
		css`
			:host {
				display: block;
			}
			section {
				margin:80px auto; 
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				gap: 24px;
			}
			section > h1 {
				font-size: 4rem;
				font-weight: bold;
				text-align: center;
			}
			.picks {
				display: flex;
				flex-direction: row;
				justify-content: center;
				flex-wrap: wrap;
				gap: 2.5rem;
			}
			section > button {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 1rem;
				border-radius: 12px;
				border: none;
				color: #fff;
				font-weight: bold;
				background: var(--rose--compact);
			}
			@media (min-width:200px) and (max-width:600px) {
				section {
					padding:3rem;
				}
			}
		`,
	];

	render() {
		return html`
			<section>
				<h1>Today's Pics</h1>
				<div class="picks">
					<card-nft
						time="12d 13h 56m"
						price="4"
						userName="David Lezama"
						like="666"
						nft="main"
					></card-nft>
					<card-nft
						time="12d 13h 56m"
						price="5"
						userName="DLT"
						nft="hands"
						like="753"
					></card-nft>
					<card-nft
						time="12d 13h 56m"
						price="98"
						userName="John Doe"
						nft="rocket"
						like="534"
					></card-nft>
					<card-nft
						time="12d 13h 56m"
						price="98"
						userName="John Doe"
						nft="rocket"
						like="534"
					></card-nft>
				</div>
				<button>
					<img src="${loadMore}" alt="" />
					load more
				</button>
			</section>
		`;
	}
}
customElements.define(tagName, Pics);
