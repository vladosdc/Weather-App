import {useState} from "react";
import WeatherService from "../../services/WeatherService";
import './searchField.scss'
import SearchPhotoCityServices from "../../services/SearchPhotoCityService";
import WeatherForecastService from "../../services/WeatherForecastService";
import {useSelector, useDispatch} from "react-redux";
import {
    setRequestError
} from "../../actions/actions";


const SearchField = () => {
    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState('Kiev')
    const [value, setValue] = useState('Search...')

    const requestError = useSelector(state => state.requestError)

    const writeValues = (event) => {
        if (event.key === "Enter") {
        setSearchValue(event.target.value)
            event.target.value = ""
            event.target.blur()
        }
    }

    const clearError = () => {
        setValue("Search...")
    }


    if (requestError) {
        dispatch(setRequestError(false))
        setValue('Not found!')
    }

    return (
        <div className="search">
            <div className="search__container">
                <input onKeyDown={writeValues} onChange={clearError} type="text" className="search__field" placeholder={value}/>
                <WeatherService searchValue={searchValue}/>
                <SearchPhotoCityServices searchValue={searchValue}/>
                <WeatherForecastService searchValue={searchValue}/>
            </div>
        </div>
    );

};


export default SearchField