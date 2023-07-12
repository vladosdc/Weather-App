import spinner from '../../resources/spinner.gif'
import './spinnerForPhoto.scss'
const SpinnerForPhoto = () => {
    return (
        <div className="spinner-for-photo">
            <img className="spinner-for-photo_img" src={spinner} alt="loading..."/>
        </div>
    )
}

export default SpinnerForPhoto