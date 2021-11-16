import React from 'react';
import '../styles/header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <header id="home">
                <h1>Portifólio Abne</h1>
                <div className="header-background"></div>
                <nav>
                    <a href="#about">Sobre</a>
                    <a href="#projects">Projetos</a>
                </nav>
            </header>
        );
    }
}