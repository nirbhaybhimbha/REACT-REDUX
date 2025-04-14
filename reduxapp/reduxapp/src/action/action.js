export const AddData = (data) => {
    return { type: "ADD", payload: data }
}

export const RemoveData = (idx) => {                   
    return { type: "REMOVE", payload: idx }
}

export const SortData = () => {
    return { type: "SORT" }
}

export const SearchData = (item) => {
    return { type: "SEARCH", payload: item }
}

export const UpdateData = (item, index) => {
    return { type: "UPDATE", payload: { item, index } }
}