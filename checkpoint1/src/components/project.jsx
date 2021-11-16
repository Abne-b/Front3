import React from 'react';
import '../styles/project.scss';
import '../icons/style.css'

export default class Project extends React.Component {
    render() {
        return (
            <div className="card">
                <div>
                    <img className="print" src={this.props.print} alt="captura de tela do projeto"></img>
                    <h3 className="title">{this.props.title}</h3>
                    <p className="description">{this.props.description}</p>
                </div>
                <div className="links">
                    <a className="link" href={this.props.link} target="_blank" rel="noopener noreferrer"><i className="icon-new-tab" ></i></a>
                    <a className="github" href={this.props.github} target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
                </div>
            </div>
        );
    }
}