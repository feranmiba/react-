import './components/maincontent.css';
import logo from './logo.svg';

function MainContent() {
   return (
    <div>
        <header>
        <section className="header">
            <p>
        <img src={logo} className="logo" alt="logo" />
        </p>
        <ul className="navi">
            <li className="gation">Pricing</li>
            <li className="gation">About</li>
            <li className="gation">Contact</li>
        </ul>

        </section>
        <p>
       <h1 className='fun'>Fun Facts about React</h1>
        </p>
        </header>
    </div>
   ); 
}
export default MainContent;