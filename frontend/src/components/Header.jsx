import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <><header className='header'>
            <ul>
                {user ? (
                    <li>
                        <p>Greetings, fellow traveler, {user && user.name}!</p>
                    </li>
                    ,
                    <li>
                        <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt />LogOut
                        </button>
                    </li>
                ) : (
                    <li>
                        <Link to='/login'>
                            <FaSignInAlt />Login
                        </Link>
                    </li>
                    ,
                    <li>
                        <Link to='/register'>
                            <FaUser />Register
                        </Link>
                    </li>
                )}
            </ul>
        </header><div className="banner">
                <p>D&D: Chores Edition</p>
            </div></>
    )
}

export default Header;