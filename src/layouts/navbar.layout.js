import { LitElement, html, css } from 'lit';
import logo from '../assets/icons/logo.svg'
import searchSVG from '../assets/icons/search.svg'
import wallet from '../assets/icons/wallet.svg'

export const tagName = 'navbar-layout';

class Navbar extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .container{
                display: flex;
                flex-direction:row;
                justify-content:center;
                align-items:center;
                gap:97px;
                padding :26px 0px;
            }
            .contentLogo {
                display: flex;
                flex-direction:row;
                align-items:center;
                gap:40px;
            }
            .contentLogo > figure {
                display:flex;
                flex-direction:row;
                justify-content:center;
                margin:0;
                padding:0;
                align-items:center;
                gap:20px;
            }
            .contentLogo > figure > img {
                width:46px;
            }
            .contentLogo > figure > span {
                font-size:32px;
                font-weight:bold;
            }
            .contentLogo > label {
                background: var(--gray--color);
                display: flex;
                align-items:center;
                justify-content:center;
                gap:.2rem;
                border-radius:.5rem;
                padding:.5rem;
            }
            .contentLogo > label > input {
                width:100%;
                background: transparent;
                border:none;
                color:var(--color--primary)
            }
            .contentLogo > lable > input::placeholder {
                color: var(--color--primary);
                opacity:.8;
            }
            .contentLogo > label > input:focus{
                outline:none;
            }
            .contentLogo > label > span > img {
                width:20px;
                color:var(--color--primary)
            }

            .contentMenu{
                display: flex;
                align-items:center;
                flex-wrap:wrap;
                gap:32px;
            }
            .list{
                padding:0;
                margin:0;
                display:flex;
                flex-direction:row;
                align-items:center;
                list-style:none;
                gap:32px;
            }
            .list > li {
                font-size:1rem;
                font-weight:bold;
                cursor: pointer;
            }
            .contentMenu > .btnWallet {
                border:none;
                background: var(--rose--compact);
                display:flex;
                flex-direction:row;
                align-items:center;
                gap:.5rem;
                border-radius:12px;
                padding:1rem;
            }
            .contentMenu > .btnWallet > span{
                font-weight:bold;
                color:var(--color--primary)
            }
            .active{
                color:var(--rose--color--primary)
            }
            @media (min-width:200px) and (max-width:768px){
                .container{
                    flex-direction:column;
                    gap:1rem;;

                }
                .contentLogo{
                    flex-direction:column;
                    gap:.5rem;
                }
                .contentMenu{
                    justify-content:center;
                }
            }
        `
    ];

    activeLink() {
        console.log('linsk actives')
        const links = this.shadowRoot.querySelectorAll(".link");
        links.forEach(link => [
            link.addEventListener('click', () => {
                links.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            })
        ])
    }

    firstUpdated() {
        this.activeLink();
    }

    render() {
        return html`
            <nav class="container">

                <div class="contentLogo">
                    <figure>
                        <img src="${logo}" alt="ultraNft"/>
                        <span>Ultra NFT</span>
                    </figure>

                    <label >
                        <span><img src="${searchSVG}" alt="s"/></span>
                        <input type="text" name="query" placeholder="search"/>
                    </label>
                </div>

                <div class="contentMenu">
                    <ul class="list">
                        <li class="link active">Home</li>
                        <li class="link">Explore</li>
                        <li class="link">Pages</li>
                        <li class="link">Contact Us</li>
                    </ul>

                    <button class="btn btnWallet">
                        <img src="${wallet}" alt="walletUltra"/>
                        <span>Connect Wallet</span>
                    </button>
                </div>

            </nav>
        `;
    }
}
customElements.define(tagName, Navbar);
