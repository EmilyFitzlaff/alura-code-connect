import React from "react";
import './styles.css';

export default function Filter() {
    return (
        <section className="filter-container">
            <ul>
                <li>Programação</li>
                <li>React</li>
            </ul>

            <button>Limpar tudo</button>
        </section>
    )
}