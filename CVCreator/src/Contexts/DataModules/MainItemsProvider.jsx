import {
  createContext,
  useContext,
  useReducer
} from "react";


const MainItemsContext         = createContext(null);
const MainItemsDispatchContext = createContext(null);


export default function MainItemsProvider ({ children }) {
  const [items, dispatch] = useReducer(mainItemsReducer, {});

  return (
    <MainItemsContext.Provider value={ items }>
      <MainItemsDispatchContext.Provider value={ dispatch } >
        { children }
      </MainItemsDispatchContext.Provider>
    </MainItemsContext.Provider>
  );
}


export function useMainItems () {
  return useContext(MainItemsContext);
}

export function useMainItemsDispatch () {
  return useContext(MainItemsDispatchContext);
}


function mainItemsReducer(items, action) {
  switch (action.type) {
    case 'loaded_data': {
      return action.data;
    }
    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  }
}