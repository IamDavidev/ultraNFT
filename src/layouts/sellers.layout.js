import { LitElement, html, css } from 'lit';

import '../components/seller.component.js'


export const tagName = 'top-sellers'
export class Sellers extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            section {
                margin: auto 100px;
            }
            .contentSellers{
                display:flex;
                align-items:center;
                flex-wrap:wrap;
                gap:2rem;
                justify-content:center;
            }
            .topSellers{
                text-align:center;
                font-size:4rem;
                font-weight:bold;
            }
            @media (min-width: 200px) and (max-width: 768px) {
                section{
                    margin: auto;
                }
            }
        `
    ];

    render() {
        return html`
            <section>
               <h1 class="topSellers">
                    Top Sellers
               </h1> 
               <section class="contentSellers">
                    <content-seller sellerName="David Lezama" totalPrice="289.90"></content-seller>
                    <content-seller sellerName="dlt" totalPrice="246.99"></content-seller>
                    <content-seller sellerName="joh Doe" totalPrice="2898.8"></content-seller>
                    <content-seller sellerName="jo its" totalPrice="278.9"></content-seller>
                    <content-seller sellerName="David" totalPrice="293.89"></content-seller>
                    <content-seller sellerName="itsDaviddev" totalPrice="24292.0"></content-seller>
                    <content-seller sellerName="dev" totalPrice="803.098"></content-seller>
                    <content-seller sellerName="David" totalPrice="293.89"></content-seller>
               </section>
            </section>
        `;
    }
}
customElements.define(tagName, Sellers);
