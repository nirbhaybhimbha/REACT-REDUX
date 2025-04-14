const initialState = JSON.parse(localStorage.getItem("infoData")) || [];

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD": {
            localStorage.setItem("infoData", JSON.stringify([...state, action.payload]));
            return [...state, action.payload];
        }

        case "REMOVE": {
            const nweData = state.filter((item, index) => index !== action.payload);
            localStorage.setItem("infoData", JSON.stringify(nweData))
            return nweData;
        }

        case "SORT": {
            const SortData = [...state].sort((a, b) => (a.name > b.name ? 1 : -1))
            return SortData
        }

        case "SEARCH": {
            const SearchData = state.filter((item) =>
                item.name.toLowerCase()?.includes(action.payload.toLowerCase())
            )
            return SearchData
        }

        // case "UPDATE": {
        //     const update = state.map((item, index) => {
        //         if (index === action.payload.index) {
        //             return action.payload.item
        //         }
        //         else return item
        //     })
        //     localStorage.setItem("infoData", JSON.stringify(update))
        //     return update
        // }
        case "UPDATE": {
            const update = state.map((item, index) => {
                if (index === action.payload.index) {
                    return action.payload.item
                }
                else return item
            })
            localStorage.setItem("infoData", JSON.stringify(update))
            return update
        }
        // Always handle default case
        default:
            return state;
    }
};

export { FormReducer };



