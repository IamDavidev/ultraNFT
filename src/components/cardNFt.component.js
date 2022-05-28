import { LitElement, html, css } from 'lit';
import nft from '../assets/images/nftMain.png';
import user from '../assets/images/avatarMetric.png';

import heart from '../assets/icons/Heart.svg';
import eth from '../assets/icons/eth.svg';
import crow from '../assets/icons/Crown.svg';
import clock from '../assets/icons/clockIcon.svg';

import main from '../assets/images/nftMain.png';
import hands from '../assets/images/nftHands.png';
import rocket from '../assets/images/rocket.png';

export const nfts = {
	main,
	hands,
	rocket,
};

export const tagName = 'card-nft';
export class CardNFT extends LitElement {
	static get properties() {
		return {
			time: { type: String },
			price: { type: String },
			userName: { type: String },
			nft: { type: String },
			like: { type: String },
			crows: { type: String },
		};
	}
	static styles = [
		css`
			:host {
				display: block;
			}
			figure {
				padding: 0;
				margin: 0;
			}
			.container {
				background: #3c485da6;
				padding: 24px;
				border-radius: 1.5rem;
				box-sizing: border-box;
				width: 320px;
				height: auto;
				display: flex;
				flex-direction: column;
				gap: 24px;
			}
			.contentNft > .nft {
				width: 100%;
				object-fit: cover;
				border-radius: 1.5rem;
			}
			.contentUser {
				display: flex;
				flex-direction: row;
				gap: 12px;
			}
			.contentUser > .avatar {
				width: 56px;
				object-fit: contain;
			}
			.contentUser > div > h5,
			p {
				margin: 0;
			}
			.contentUser > div > h5 {
				font-size: 1.2rem;
				font-weight: bold;
			}
			.contentUser > div > p {
				font-size: 1rem;
				color: #fffcff;
			}
			.contentUser > div > p > span {
				font-weight: bold;
				color: #fff;
			}
			.statistics {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
			}
			.statistics > div {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 4px;
			}
			.footer {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
			.footer > button {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding: 1rem;
				border-radius: 12px;
				border: none;
				color: #fff;
				font-weight: bold;
			}
			.btnTime {
				background: #3c485d;
			}
			.btnPlace {
				background: var(--rose--compact);
			}
			@media (min-width:200px)and (max-width:480px){
				.container {
					width:auto;
				}
			}
		`,
	];

	render() {
		return html`
			<article class="container">
				<figure class="contentNft">
					<img src="${nfts[this.nft]}" alt="nft-robot" class="nft" />
				</figure>
				<figure class="contentUser">
					<img src="${user}" alt="nft-robot" class="avatar" />
					<div>
						<h5>Metaverse</h5>
						<p>create by <span>${this.userName}</span></p>
					</div>
				</figure>
				<div class="statistics">
					<div>
						<img src="${heart}" alt="" />
						<span>${this.like}</span>
					</div>
					${this.crows
				? html`
								<div>
									<img src="${crow}" alt="" />
									<span>${this.crows}/100</span>
								</div>
						  `
				: html``}
					<div>
						<img src="${eth}" alt="" />
						<span>${this.price}ETH</span>
					</div>
				</div>
				<div class="footer">
					<button class="btnTime">
						<img src="${clock}" alt="time" /><span>${this.time}</span>
					</button>
					<button class="btnPlace">
						<img src="${crow}" alt="crows" /><span>Place Bid </span>
					</button>
				</div>
			</article>
		`;
	}
}
customElements.define(tagName, CardNFT);
