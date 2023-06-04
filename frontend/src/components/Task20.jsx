import StarRating from './StarRating';
import {ToastContainer, toast} from 'react-toastify'

function Task20() {
    const notifyUpdate = () => toast("MAINQUEST ITEM.  You cannot update this Task!")
    const notifyDelete = () => toast("MAINQUEST ITEM.  You cannot delete this Task!")

    return( 
        <>
        <tr>
            <td>20</td>
            <td>Choose a Task of Your Choice!</td>
            <td><StarRating /></td>
            <td>
                <div className="actions">
                    <span className="text-gradient"><i id="pencil" className="fas fa-pencil-alt" onClick={() => notifyUpdate()}></i></span>
                    <span className="text-gradient"><i id="X" className="fas fa-times" onClick={() => notifyDelete()}></i></span>
                    <a href="about:blank" className="btn border-shadow check">
                    </a>
                </div>
            </td>
        </tr>
        </>
    )
}

export default Task20;