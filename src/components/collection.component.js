import { LitElement, html, css } from 'lit';

import main from '../assets/images/nftMain.png';
import robot from '../assets/images/nft-robot.png';
import hands from '../assets/images/nftHands.png';
import phone from '../assets/images/nftPhone.png';
import robotTwo from '../assets/images/nftrobot.png';
import rocket from '../assets/images/nftRockcet.png';
import schedule from '../assets/images/nftSchedule.png';
import user from '../assets/images/nftUser.png';
import userT from '../assets/images/nftUser2.png';
import userTR from '../assets/images/nftUser3.png';
import Metric from '../assets/images/avatarMetric.png';
import Saly from '../assets/images/avatarSaly.png';
import heart from '../assets/icons/Heart.svg';
import { IndexRandom, LikesRandom } from '../helpers/IndexRandom';

export const collectionADR = [main, robot, hands];
export const collectionFT = [phone, robotTwo, rocket];
export const collectionTR = [schedule, rocket, main];
export const collectionCI = [user, userT, userTR];
export const avatars = [Metric, Saly];

const nftRandom = () => {
	const random = Math.floor(Math.random() * 3);
	return random;
};

export const tagName = 'collection-nfts';
export class Collection extends LitElement {
	static styles = [
		css`
			:host {
				display: block;
			}
			.collectionNft {
				padding: 2rem 1rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 320px;
				background: #ffffff0f;
				border-radius: 2rem;
				gap: 1rem;
			}

			.gridCollection {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr 1fr;
				gap: 1rem;
			}
			.nftGrid1 {
				grid-column: 1 / 2;
				grid-row: 1 / 2;
				width: 100%;
				border-radius: 1rem;
			}
			.nftGrid2 {
				grid-column: 1 / 2;
				grid-row: 2 / 3;
				width: 100%;
				border-radius: 1rem;
			}
			.nftGrid3 {
				grid-column: 2 / 3;
				grid-row: 1 / 2;
				width: 100%;
				border-radius: 1rem;
			}
			.nftGrid4 {
				grid-column: 2 / 3;
				grid-row: 2 / 3;
				width: 100%;
				border-radius: 1rem;
			}
			.collectionDescription {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				width: 100%;
			}
			.collectionDescription > .creator {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.5rem;
			}
			.creatorName,
			.likes {
				display: flex;
				flex-direction: column;
			}
			@media (min-width:200px)and (max-width:480px){
				.collectionNft{
					width:auto;
				}
			}
		`,
	];

	render() {
		return html`
			<article class="collectionNft">
				<figure class="gridCollection">
					<img
						src="${collectionADR[IndexRandom(3)]}"
						alt="nftCollection"
						class="nftGrid1"
					/>
					<img
						src="${collectionCI[IndexRandom(3)]}"
						alt="nftCollection"
						class="nftGrid2"
					/>
					<img
						src="${collectionFT[IndexRandom(3)]}"
						alt="nftCollection"
						class="nftGrid3"
					/>
					<img
						src="${collectionTR[IndexRandom(3)]}"
						alt="nftCollection"
						class="nftGrid4"
					/>
				</figure>
				<div class="collectionDescription">
					<div class="creator">
						<img src="${avatars[IndexRandom(2)]}" alt="creator" />
						<div class="creatorName">
							<span> Metaverso</span>
							<span>creator by Jonh Name</span>
						</div>
					</div>
					<div class="likes">
						<img src="${heart}" alt="like" />
						<span>${LikesRandom()}</span>
					</div>
				</div>
			</article>
		`;
	}
}
customElements.define(tagName, Collection);
