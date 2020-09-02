import { CHANGENAME } from '../actions'

const initialState = { name: "Yutaro" }

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGENAME: 
            if (state.name == "Yutaro") {
                return { name: "Takuro" }
            } else {
                return { name: "Yutaro" }
            }
        default:
            return state
    }
}