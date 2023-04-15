function Reducer(items, action) {
    switch (action.type) {
        case "ADD":
            return [...items, { id: items.length + 1, name: action.payload[0], number: action.payload[1] }]

        case "DELETE":
            const newItems = items.filter((e)=>e.id !== action.payload.id)
            return newItems

        default:
            return items
    }
}

export default Reducer