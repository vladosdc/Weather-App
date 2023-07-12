import spinner from '../../resources/spinner.gif'
import './spinner.scss'
const Spinner = () => {
    return (
        <div className="spinner">
            <img className="spinner_img" src={spinner} alt="loading..."/>
        </div>
    )
}

export default Spinner