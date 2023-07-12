const initialState = {
    temperature: '',
    country: '',
    requestError: false,
    loading: false,
    loadingForecast: false,
    loadingForPhoto: false,
    city: '',
    feelsLike: '',
    wind: '',
    humidity: '',
    visibility: '',
    weatherText: '',
    weatherIcon: null,
    photo: null,
    pressure: '',
    airQuality: '',
    day1: '',
    avgTempDay1: '',
    textDay1: '',
    iconDay1: null,

    day2: '',
    avgTempDay2: '',
    textDay2: '',
    iconDay2: null,

    day3: '',
    avgTempDay3: '',
    textDay3: '',
    iconDay3: null,

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TEMPERATURE':
            return {
                ...state,
                temperature: action.payload
            };
        case 'SET_REQUEST_ERROR':
            return {
                ...state,
                requestError: action.payload
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            };
        case 'SET_LOADING_FORECAST':
            return {
                ...state,
                loadingForecast: action.payload
            };
        case 'SET_LOADING_FOR_PHOTO':
            return {
              ...state,
                loadingForPhoto: action.payload
            };
        case 'SET_COUNTRY':
            return {
                ...state,
                country: action.payload
            };
        case 'SET_CITY':
            return {
                ...state,
                city: action.payload
            };
        case 'SET_FEELS_LIKE':
            return {
                ...state,
                feelsLike: action.payload
            };
        case 'SET_WIND':
            return {
                ...state,
                wind: action.payload
            };
        case 'SET_HUMIDITY':
            return {
                ...state,
                humidity: action.payload
            };
        case 'SET_VISIBILITY':
            return {
                ...state,
                visibility: action.payload
            };
        case 'SET_WEATHER_TEXT':
            return {
                ...state,
                weatherText: action.payload
            };
        case 'SET_WEATHER_ICON':
            return {
                ...state,
                weatherIcon: action.payload
            };
        case 'SET_PHOTO':
            return {
                ...state,
                photo: action.payload
            };
        case 'SET_PRESSURE':
            return {
              ...state,
              pressure: action.payload
            };
        case 'SET_AIR_QUALITY':
            return {
                ...state,
                airQuality: action.payload
            };

        case 'SET_DAY1':
            return {
                ...state,
                day1: action.payload
            };
        case 'SET_AVG_TEMP_DAY1':
            return {
              ...state,
              avgTempDay1: action.payload
            };
        case 'SET_TEXT_DAY1':
            return {
                ...state,
                textDay1: action.payload
            };
        case 'SET_ICON_DAY1':
            return {
                ...state,
                iconDay1: action.payload
            };

        case 'SET_DAY2':
            return {
                ...state,
                day2: action.payload
            };
        case 'SET_AVG_TEMP_DAY2':
            return {
                ...state,
                avgTempDay2: action.payload
            };
        case 'SET_TEXT_DAY2':
            return {
                ...state,
                textDay2: action.payload
            };
        case 'SET_ICON_DAY2':
            return {
                ...state,
                iconDay2: action.payload
            };

        case 'SET_DAY3':
            return {
                ...state,
                day3: action.payload
            };
        case 'SET_AVG_TEMP_DAY3':
            return {
                ...state,
                avgTempDay3: action.payload
            };
        case 'SET_TEXT_DAY3':
            return {
                ...state,
                textDay3: action.payload
            };
        case 'SET_ICON_DAY3':
            return {
                ...state,
                iconDay3: action.payload
            };

        default:
            return state;
    }
};

export default rootReducer;
