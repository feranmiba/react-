import './footer.css';
import insta from './image/iconIG.png'
import twitter from './image/TwitterIcon.png'
import github from './image/GitHubIcon.png'
import facebook from './image/FacebookIcon.png'

function TheFooter() {
   return (
    <div className='main-name'>
      <div className='foot'>
      <section className="social-link">
      <a href='amiolademilade@gmail.com'>
         <img src={insta} className="logoes" alt="logo" />
      </a>
      <a href='amiolademilade@gmail.com'>
         <img src={twitter} className="logoes" alt="logo" />
      </a>
      <a href='amiolademilade@gmail.com'><img src={facebook} className="logoes" alt="logo" /></a>
      <a href='amiolademilade@gmail.com'><img src={github} className="logoes" alt="logo" /></a>
      </section>
      </div>
    </div>
   ); 
}
export default TheFooter;