import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js'
// import setUp from '../assets/icons/'
import setUp from '../assets/images/setup.png'
import add from '../assets/images/add.png'
import create from '../assets/images/create.png'
import list from '../assets/images/list.png'

const works = {
    setUp,
    add,
    create,
    list
}

export const tagName = 'card-work';
export class CardWork extends LitElement {
    static get properties() {
        return {
            work: { type: String },
            description: { type: String },
            title: { type: String }
        }

    }
    static styles = [
        css`
            :host {
                display: block;
            }
            .contentWork {
                display: flex;
                flex-direction:column;
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
                width:270px;
                justify-content:center;
                padding:1rem 0;
                align-items:center;
                text-align:center;
                border-radius:1rem;
            }
            .contentWork img {
                width:40px;
                height:40px;;
                object-fit:contain;
            }
            .contentWork h3 {
                margin:0;
            }
        `
    ];
    render() {
        return html`
        <article class="contentWork">
            <img src="${works[this.work]}"  alt="${this.title}" />
            <h3>${this.title}</h3>
            <p>${this.description || "no desciption "}</p>
        </article>
        `;
    }
}
customElements.define(tagName, CardWork)