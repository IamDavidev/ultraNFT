import { LitElement, html, css } from 'lit';


export const tagName = 'my-counter';

class Counter extends LitElement {
    static get properties() {
        return {
            count: {
                type: Number,
            },
        };
    }
    static styles = css`
        :host{
        }
    `

    async fecthData() {
        const $userName = this.shadowRoot.getElementById('user_name');

        const name = await fetch("https://randomuser.me/api/").then(res => res.json()).then(data => {
            console.log(data.results[0].name.first);
            return data.results[0].name.first;
        })
        console.log(name, $userName);

        $userName.innerHTML = name;
    }

    constructor() {
        super();
        this.count = 0;
        console.log('constructor');
    }

    render() {
        return html`
			<div class="container">
                <h1 id="user_name">h</h1>
				<button type="button" @click=${this.fecthData}>data</button>
			</div>
		`;
    }
}

customElements.define(tagName, Counter); 