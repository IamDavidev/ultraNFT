import { LitElement, html, css } from 'lit';


export const tagName = 'actions-layout';
export class Actions extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define(tagName, Actions);