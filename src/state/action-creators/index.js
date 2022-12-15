import Service from "../../components/Service"
import Home from '../../components/Home'

export const showService = () =>{
    return (dispatch) => (
        dispatch({
            type:Service
        })
    )

}
export const showHome = () => {
    return(dispatch) =>(
        dispatch({
            type:Home
        })
    )
}