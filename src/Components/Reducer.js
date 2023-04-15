function Reducer(items, action) {
    switch (action.type) {
        case "ADD":
            return [...items, { id: items.length + 1, name: action.payload[0], number: action.payload[1] }]

        default:
            return items
    }
}

export default Reducer