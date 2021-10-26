import './style.css'; 

const Footer = () => { 
    const generateDateString = () => { 
        const creation = "2021"; 
        const current = `${new Date().getFullYear()}`; 
        return creation === current ? current : `${creation} - ${current}`; 
    } 
    
    return( 
    <footer id="footer"> 
    <h5>Todos os direitos reservados. &copy;Copyright {generateDateString()}</h5> 
    </footer> 
    ) 
} 

export default Footer; 