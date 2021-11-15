import React from 'react';
import '../styles/project.scss';
import '../icons/style.css'

export default class Project extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="print" src={this.props.print}></img>
                <h3 className="title">{this.props.title}</h3>
                <p className="description">{this.props.description}</p>
                <a className="link" href={this.props.link}><i className="icon-new-tab" ></i></a>
                <a className="github" href={this.props.github}><i className="icon-github"></i></a>
            </div>
        );
    }
}