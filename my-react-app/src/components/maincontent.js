import './maincontent.css';
import mail from './image/Icon.png'

function MainContent() {
   return (
    <div>
    <div className='main-name'>
        <section className='pro'>
        <h1>Laura smith </h1>
        <p className='dev'>Frontend developer</p>
        <h4>laura@website</h4>
        <p className='btn'> 
            <a href = "amiolademilade@gmail.com" className="mail">
             <img src={mail} className="logos" alt="logo" />  <span>Email</span>
            </a>
        </p>
        <section className= "about-sect">
        <p className= 'about'>
          <h1>About</h1>
          <p>I am a Frontend developer with a particular interset in making things simple and automating
            daily task. I try to keep up with security and best practice, and am always looking for new things to learn
          </p>
        </p>
        <p className= 'about'>
          <h1>Interest</h1>
          <p>Food expert, Music scholar, Reading, Internet fanatic. Bacon buff, Entrepenuer, Travel geek, Pop culture ninga, Coffe fanatic. 
          </p>
        </p>
        </section>
        </section>
      </div>  
    </div>
   ); 
}
export default MainContent;