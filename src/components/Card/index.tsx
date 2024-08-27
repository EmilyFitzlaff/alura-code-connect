import React from "react";
import Image1 from './assets/image1.svg';
import Code from './assets/code.svg';
import Share from './assets/share.svg';
import Comment from './assets/comment.svg';
import Avatar from './assets/avatar.png';

import './styles.css';

export default function Card() {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={Image1} alt="Imagem 1" />
            </div>

            <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>Titulo do post em duas linhas</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.</p>
                </div>
            </div>

            <div className="conteudo__rodape">
                <ul>
                    <li>
                        <img src={Code} alt="Códigos" />
                        <p>12</p>
                    </li>

                    <li>
                        <img src={Share} alt="Compartilhar" />
                        <p>14</p>
                    </li>

                    <li>
                        <img src={Comment} alt="Comentar" />
                        <p>16</p>
                    </li>
                </ul>

                <div className="rodape__usuario">
                    <img src={Avatar} alt="Avatar do usuário" />
                    <p>@Emily</p>
                </div>
            </div>
        </article>
    )
}