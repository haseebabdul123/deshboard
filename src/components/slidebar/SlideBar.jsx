import {useState,useEffect} from 'react'
import { personsImgs } from '../../utiles/img';
 import {navigationList} from '../../data/Data'
import './style.css';


export default function SlideBar() {

    const [activeListIdx] = useState(1);
  return (
    <div className='slidebar'>
        <div className="user-info">
            <div className="user-img">
                <img src= {personsImgs.person_one} alt="Profile img" />
            </div>
            <span className='user-name'>Abdul Haseeb</span>
        </div>
        <nav className='nav-bar'>
        { navigationList.map((navigationList)=> (
                    <li className="nav-item" key = { navigationList.id }>
                        <a href="#" className= {`nav-list ${ navigationList.id === activeListIdx ? 'active' : null }`}>
                        <img src={ navigationList.image } className="nav-list-icon" alt = { navigationList.image } />
                        <span className="nav-list-text">{ navigationList.title }</span>
                        </a>
                    </li>
                ))}
        </nav>
    </div>
    
  )
}
