import { LitElement, html, css } from 'lit';
import exploreIMG from '../assets/icons/RocketLaunch.svg'
import createIMG from '../assets/icons/more.svg'

import elipseIMG from '../assets/images/Ellipse.png'
import lauchIMG from '../assets/images/lauch.png'
import world from '../assets/images/word.png'
import rockedIMG from '../assets/images/rocket.png'
import wrapper from '../assets/images/background.png'


export const tagName = 'header-layout';
export class Header extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            h1{
                width:30ch
            }
            .header {
                display:flex;
                flex-direction:row;
                justify-content:center;
                padding:170px 110px;
                box-sizing:border-box;
                gap:100px;
            }
            .contentDescription > h1{
                width:17ch;
                font-weight:bold;
                font-size:3em;
                margin:20px 0;
            }
            .contentDescription > h1 > span {
                color:var(--rose--color--primary);
            }
            .contentDescription > p {
                margin: 20px 0;
                font-size:20px;
            }
            .contentBtns{
                display:flex;
                gap:40px;
            }
            .btn{
                font-size:20px;
                padding:20px 24px;
                border-radius:1rem;
                font-weight:bold;
                border:none;
                display:flex;
                align-items:center;
                color:var(--color--primary)
            }
            .btnExplore{
                background:var(--rose--compact);
            }
            .btnCreate{
                border:1px solid #fff;
                background:transparent;
            }
            .contentIlustration > figure {
                position:relative;
                margin:0;
                padding:0;
                width:400px;
                height: 470px;
            }

            .contentIlustration > figure > img {
                position:absolute;
            }

            .bg{
                position:absolute;
                left:-3rem;
                top:-5rem;
                z-index:-1;
            }
            
            .world{
                position:absolute;
                bottom:1rem;
                left:8rem;
            }

            .lauch{
                position:absolute;
                top:-3rem;
                left:-7rem;
                animation: animation-lauch 4.5s ease-in-out infinite;
            }

            .rocket{
                position:absolute;
                top:-11rem;
                right:-2rem;
                animation: animation-rocket 4.5s ease-in-out infinite;
                animation-delay:2.5s; 
            }

            @keyframes animation-rocket {
               0%{
                     transform: translate(0,0);
               } 
               50%{
                    transform:translate(-25px,25px)
               }
               100%{
                   transform:translateY()
               }
            }

            @keyframes animation-lauch {
                0%{
                    transform: translate(-10px,-10px);
                }
                50%{
                    transform: translate(20px,20px);
                }
                100%{
                    transform: translate(-10px,-10px);
                }             
            }
            @media (min-width:200px) and (max-width:768px){
                .header{
                    padding:0;
                    flex-direction:column;
                }
                .contentDescription > h1 {
                    width:10ch;
                    font-size:2.5em;
                }
                .contentBtns{
                    justify-content:center;
                    gap:20px;
                }
                .contentIlustration{
                    display:flex;
                    justify-content:center;
                }
                .contentIlustration > figure {
                    max-width:300px;
                    height:300px;
                }

                .elip{
                    left:3rem;
                    top:9rem
                }
                .lauch{
                    top: -2rem;
                    left: 1rem;
                    max-width: 150px;
                    
                }
                .rocket{
                    width: 150px;
                    top: -3rem;
                    right: 2rem;
                }
                .bg{
                    width:250px;
                    left: 4rem;
                    top: 0;
                }
                .world{
                    max-width: 150px;
                    top: 5rem;
                    left: 8rem;
                    bottom: 0;
                }
            }
            @media (min-width:769px) and (max-width:1200px){
                .header{
                    flex-direction:column;
                    align-items:center;
                    gap:10rem;
                }
            }
        `
    ];

    render() {
        return html`
        <header class="header">    
            <div class="contentDescription">
                <h1> Discover, collect, and sell extraordinay <span> NFTS </span></h1>
                <p>NFT is the worlds fits and largets nft marketplace</p>
                <div class="contentBtns">
                    <button class="btn btnExplore">
                        <img src="${exploreIMG}" alt="explore" />
                        <span>explore</span>
                    </button>
                    <button class="btn btnCreate">
                        <img src="${createIMG}" alt="create"/>
                        <span>create</span>
                    </button>
                </div>
            </div>
            <div class="contentIlustration">
                <figure>
                    <img src="${elipseIMG}" alt="" class="elip"/>
                    <img src="${lauchIMG}" alt="" class="lauch"/>
                    <img src="${rockedIMG}" alt="" class="rocket"/>
                    <img src="${wrapper}" alt="" class="bg"/>
                    <img src="${world}" alt="" class="world"/>
                </figure>
            </div>
        </header>
        `;
    }
}
customElements.define(tagName, Header);