import React from 'react';
import '../styles/header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Portifólio Abne</h1>
                <img className="header-background" src="https://image.freepik.com/vetores-gratis/conjunto-de-patas-gatos-multicoloridos-fofos_74855-5503.jpg"></img>
                <nav>
                    <a href="#">Início</a>
                    <a href="#">Sobre</a>
                    <a href="#">Projetos</a>
                </nav>
            </header>
        );
    }
}