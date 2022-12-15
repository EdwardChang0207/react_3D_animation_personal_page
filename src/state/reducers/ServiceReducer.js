const reducer = (state = false, action) =>{
    switch (action){
        case "Service":
            return (state = true);
        case "Home":
            return (state = false);
        default:
            return state;
    }
}

export default reducer;