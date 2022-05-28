import { LitElement, html, css } from 'lit';

import metric from '../assets/images/avatarMetric.png';
import saly from '../assets/images/avatarSaly.png';
import avt from '../assets/images/Avatar.png';
import { IndexRandom } from '../helpers/IndexRandom';

const seller = [metric, saly, avt];

export const tagName = 'content-seller';
export class Seller extends LitElement {
	static get properties() {
		return {
			seller: { type: String },
			sellerName: { type: String },
			totalPrice: { type: Number },
		};
	}

	static styles = [
		css`
			:host {
				display: block;
			}
			.contentSeller {
				background: #ffffff30;
				width: 224px;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				padding: 1rem;
				gap: 10px;
				align-items: center;
				border-radius: 2rem;
			}
			.contentSeller > figure {
				margin: 0;
				padding: 0;
			}

			.descriptionSeller > h4 {
				margin: 0;
				color: #fff;
			}
			.descriptionSeller > span {
				color: #8393af;
				font-size: 1rem;
			}
			.avatar {
				width: 52px;
				height: 52px;
			}
		`,
	];

	render() {
		return html`
			<article class="contentSeller">
				<figure>
					<img src="${seller[IndexRandom(3)]}" alt="avatar" class="avatar" />
				</figure>
				<div class="descriptionSeller">
					<h4>${this.sellerName}</h4>
					<span>${this.totalPrice} ETH</span>
				</div>
			</article>
		`;
	}
}
customElements.define(tagName, Seller);
