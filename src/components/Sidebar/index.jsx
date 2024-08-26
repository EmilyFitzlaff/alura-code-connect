import Logo from './assets/logo.svg';
import Feed from './assets/feed.svg';
import Profile from './assets/profile.svg';
import AboutUs from './assets/info.svg';
import Logout from './assets/logout.svg';
import './styles.css';

export default function Sidebar() {
    return (
        <aside>
            <img src={Logo} alt="Logo do code connect" title="Logo do code connect" />

            <nav>
                <ul className='sidebar-list'>
                    <li><a href="#" className='item__link--publish'>Publicar</a></li>
                    <li>
                        <a href="#" className='item__link item__link--active'>
                            <img src={Feed} alt="Feed de publicações" title='Feed de publicações' />
                            <span>Feed</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" className='item__link'>
                            <img src={Profile} alt="Perfil" title='Perfil' />
                            <span>Perfil</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" className='item__link'>
                            <img src={AboutUs} alt="Sobre nós" title='Sobre nós' />
                            <span>Sobre nós</span>
                        </a>
                    </li>

                    <li>
                        <a href="#" className='item__link'>
                            <img src={Logout} alt="Sair" title='Sair' />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}