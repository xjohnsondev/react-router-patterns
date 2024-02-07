import {NavLink} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './Nav.css';

const Nav = ({dogs}) => {
    return (
        <ul className='dogs'>
            {dogs.map(dog => {
                return <li key={uuidv4()} className='list-dog'>
                    <NavLink to={`/dogs/${dog.name}`} className='NavLink'>{dog.name}</NavLink>
                    </li>
            })}
        </ul>
    );
};

export default Nav;