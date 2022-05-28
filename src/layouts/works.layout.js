import { LitElement, html, css } from 'lit';
import '../components/cardWork.component.js'


export const tagName = 'works-layout';
export class Works extends LitElement {

    static styles = [
        css`
            :host {
                display: block;
            }
            .container {
                margin:80px 0;
            }
            .workTitle{
                text-align:center;
                font-size:4rem;
                margin-top:0;
            }
            .contentCards{
                display:flex;        
                justify-content:center;
                align-items:center;
                flex-wrap:wrap;
                gap:30px;
                margin:0 auto;
            }
        `
    ];

    render() {
        return html`
            <section class="container">
                <h2 class="workTitle">How it Works</h2>
                <div class="contentCards">
                    <card-work work="setUp" title="Set Up your wallet" description="once you've set up your wallet fo choise, connet it to openSeaby clicking the nft marketplacein in the top right corner"></card-work> 
                    <card-work work="create" title="create your collection" description="click create and set your collection. Add socials links, a description, profile& banner images, and set a secondary sales fee."></card-work> 
                    <card-work work="add" title="add your NFTs" description="Upload your work ( Image,video audio, or 3D art). add a tilte and descriotiop and customize your NFTs with properties,stats"></card-work> 
                    <card-work work="list" title="List them for sale " description="Choose between auctions, fixed-price listings,a dn decliniing-pice listings. Your choose how you want yo sell your NFts"></card-work> 
                </div>
            </section>
        `;
    }
}
customElements.define(tagName, Works);