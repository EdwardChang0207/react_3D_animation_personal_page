const reducer = (state = false, action) =>{
    switch (action){
        case "Home":
            return (state = true);
        case "Service":
            return (state = false);
        default:
            return state;
    }
}

export default reducer;