import React from 'react';
import '../styles/main.scss';
import Project from './project.jsx';

export default class Main extends React.Component {
    render() {
        return (
            <main className="main">

                <section id="about">
                    <img id="foto-perfil" src="https://image.freepik.com/vetores-gratis/colecao-de-gatos-pretos-do-dia-das-bruxas-desenhada-a-mao_52683-72831.jpg" alt="imagem de um casal de gatos"></img>

                    <h2>Sobre mim</h2>
                    <p>Eu não sei o que falar sobre mim, mas na seção seguinte tem uns projetinhos.</p>
                </section>

                <section id="projects">
                    {this.state.projetos.map(
                        (projeto) => {
                            return (
                                <Project className="card" print={projeto.print} title={projeto.title} description={projeto.description} link={projeto.link} github={projeto.github} key={projeto.id} />
                            );
                        }
                    )}
                </section>
                
                <a id="float-home" href="#home"><i className="icon-home"></i></a>
            </main>
        );
    }

    constructor() {
        super();
        this.state = {
            projetos: [
                {
                    id: 1,
                    print: './imgs/01-gatitos-primeiro.png',
                    title: 'Site dos Gatitos',
                    description: 'Primeiro HTML feito, impossível esquecer <3',
                    link: 'https://abne-b.github.io/Primeiro_projeto_Abne/',
                    github: 'https://github.com/Abne-b/Primeiro_projeto_Abne'
                },

                {
                    id: 2,
                    print: './imgs/02-jf.png',
                    title: 'Bem-vindo a JF',
                    description: 'Primeiro projeto avaliativo desenvolvido. Aqui o desafio foi criar uma página sobre sua cidade e tentar inserir um vídeo reproduzível.',
                    link: 'https://abne-b.github.io/avaliacao1_frontend/',
                    github: 'https://github.com/Abne-b/avaliacao1_frontend/'
                },

                {
                    id: 3,
                    print: './imgs/03-formulario.png',
                    title: 'Formulário de Login',
                    description: 'Esse foi meu primeiro formulário. Um dos objetivos era garantir que a senha estivesse oculta durante a digitação. Como complemento, adicionei outra página, na qual se encontram informações para recuperar a senha.',
                    link: 'https://abne-b.github.io/Formularios_FEI/',
                    github: 'https://github.com/Abne-b/Formularios_FEI/'
                },

                {
                    id: 4,
                    print: './imgs/04-iGatos.png',
                    title: 'iGatos',
                    description: 'Um projeto para explorar as animações do CSS. Divirta-se!',
                    link: 'https://abne-b.github.io/iGatos/',
                    github: 'https://github.com/Abne-b/iGatos/'
                },

                {
                    id: 5,
                    print: './imgs/05-parquinho.png',
                    title: 'Parquinho :3',
                    description: 'Esse foi um projeto em grupo, apresentado como avaliação final para a disciplina de Front-end 1 do Certified tech Developer. Tivemos 3 dias para desenvolvê-lo utilizando Bootstrap e a temática foi uma versão alternativa da plataforma do aluno Playground.',
                    link: 'https://drbandrade.github.io/digitalhouse/Front%20End%20I/Checkpoint3/',
                    github: 'https://github.com/Abne-b/digitalhouse/Front%20End%20I/Checkpoint3/'
                },

                {
                    id: 6,
                    print: './imgs/06-crud-python.png',
                    title: 'Byron Store',
                    description: 'Esse projeto é um CRUD em Python, desenvolvido como desafio final do Bootcamp de Google Cloud Platform oferecido pela equipe do Luiza Labs da Magazine Luiza. No repositório é possível encontrar as instruções de como rodar o projeto.',
                    link: 'https://github.com/Abne-b/Python-CRUD-LuizaLabs',
                    github: 'https://github.com/Abne-b/Python-CRUD-LuizaLabs'
                }
            ]
        };
    }
}