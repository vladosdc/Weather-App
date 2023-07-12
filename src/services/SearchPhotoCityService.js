import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {
    setPhoto,
    setLoadingForPhoto
} from "../actions/actions";

const SearchPhotoCityServices = ({searchValue}) => {
    const photoApi = process.env.REACT_APP_PHOTO_API_KEY
    const dispatch = useDispatch();

    useEffect(() => {

            if (searchValue.trim() === "") {
                return
            }

            dispatch(setLoadingForPhoto(true))

            fetch(`https://api.pexels.com/v1/search?query=${searchValue}&per_page=1`, {
                headers: {
                    Authorization: `${photoApi}`,
                },
            })
                .then (res => res.json())
                .then (data => {
                    const photo = data.photos[0].src.large;
                    dispatch(setPhoto(photo))
                    dispatch(setLoadingForPhoto(false))
                })

                .catch(error => {
                    dispatch(setLoadingForPhoto(false))
                })


    }, [searchValue.trim().toLowerCase(), dispatch])
}

export default SearchPhotoCityServices