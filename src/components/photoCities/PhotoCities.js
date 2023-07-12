import React from 'react';
import {useSelector} from 'react-redux';
import './photoCities.scss'
import SpinnerForPhoto from "../spinnerForPhoto/SpinnerForPhoto";

const PhotoCities = () => {

    const loading = useSelector(state => state.loadingForPhoto)

    const temperature = useSelector(state => state.temperature);
    const country = useSelector(state => state.country)
    const city = useSelector(state => state.city)
    const weatherIcon = useSelector(state => state.weatherIcon)
    const weatherText = useSelector(state => state.weatherText)
    const photo = useSelector(state => state.photo)

    const cityClassName = city.trim().length >= 12 ? 'photo-city__info-longCityName' : 'photo-city__info-city'

    return (
        <div className= {loading ? "photo-city-loading" : "photo-city"}>
            <div className={loading ? "photo-city__loading-background" : null}>
            {loading ? <SpinnerForPhoto/> : null}
            </div>
            <div className={loading ? "photo-city__container-loading" : "photo-city__container"}>
                <div className="photo-city__background" style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${photo})`
                }}>
                    <div className="photo-city__info">
                        <div className="photo-city__main-info-main-table">
                            <div className="main-info-table1">
                                <p className={cityClassName}>{city}</p>
                                <p className="photo-city__info-country">{country}</p>
                            </div>
                            <div className="main-info-table2">
                                <img className="photo-city__icon" src={weatherIcon} alt="weather"/>
                                <p className="photo-city__info-temperature">{temperature}°C - {weatherText}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PhotoCities;
