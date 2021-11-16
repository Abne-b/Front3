import React from 'react';
import '../styles/footer.scss';
import '../icons/style.css'

export default class Footer extends React.Component {

    generateDateString = () => {
        const creation = "2021";
        const current = `${new Date().getFullYear()}`;
        return creation === current ? current : `${creation} - ${current}`;
    }

    render() {
        return (

            <footer classname="footer">
                <div className="links">
                    <a className="linkedin" href="https://www.linkedin.com/in/abne-b/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin" ></i></a>
                    <a className="github" href="https://github.com/Abne-b" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
                    <a className="email" href="mailto:ba.alqueres@gmail.com?subject=Contact" target="_blank" rel="noopener noreferrer"><i className="icon-mail2"></i></a>
                </div>
                
                <h5>Todos os direitos reservados. &copy;Copyright {this.generateDateString()}</h5>
            </footer>
        );
    }
}
