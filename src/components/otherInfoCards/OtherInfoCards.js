import {useSelector} from "react-redux";
import './otherInfoCards.scss'
import Spinner from "../spinner/Spinner";

const OtherInfoCards = ({name, value, description, icon}) => {

    const loading = useSelector(state => state.loading)

    return (
        <div className="card">
            {loading ? <Spinner/> : null}
            <div className={loading ? "card-table-loading" : "card-table"}>
                <div className="card__name-table">
                    <img className="card__icon" src={icon} alt="icons"/>
                    <p className="card__name">{name}</p>
                </div>
                <div className="card__value-descriptions-table">
                    <p className="card__value">{value}</p>
                    <p className='card__descriptions'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default OtherInfoCards