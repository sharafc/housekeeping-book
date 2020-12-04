
import Expense from "../types/Expense";
/*
export interface Store {
    expenses: Expense[];
}

export const expensesStore: Store = {    
    expenses: []
};

type Actions = addItem |deleteItem;

export function reducer(expensesStore: Store, action: Actions): Store {
    if (action.type == "addItem") {
        return {
            ...expensesStore,
            expenses: [
                ...expensesStore.expenses,
                action.expense
            ]

        }
    }
}

interface addItem {
    type: "addItem",
    expense: Expense
}

interface deleteItem {
    type: "deleteItem",
    expense: Expense
}
*/

/*
const store [
  {name: 'Jay', alive: true},
  {name: 'Kailee', alive: true},
  {name: 'John', alive: true},
  {name: 'Mia', alive: true}
]

const reducer = (store, action) => {
    switch (action.type) {

    case "kill":
        return store.map(person => {
            if(person.name == action.payload) {
                person.alive = false;
            }
            return person
        })

    default:
        return state
    }
}

const context = useContext(store)

const [state, dispatch] = useReducer(reducer, context)

function killPerson(name) {
    dispatch({type: "kill", payload: name})
}

<Button onClick={killPerson(name)} />
*/