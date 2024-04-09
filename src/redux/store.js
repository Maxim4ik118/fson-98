import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import { mailboxReducer } from "./mailbox/mailboxReducer";

const rootReducer = combineReducers({
    mailbox: mailboxReducer,

})

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer)