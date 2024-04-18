import {
  createContext,
  useContext,
  useReducer
} from "react";


const MainItemsContext         = createContext(null);
const MainItemsDispatchContext = createContext(null);


export default function MainItemsProvider ({ children }) {
  const [items, dispatch] = useReducer(
    mainItemsReducer, {
      nextItemId: 0,
      items: []
    });

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


function mainItemsReducer(data, action) {
  switch (action.type) {
    case 'created_item': {
      const id = data.nextItemId ? data.nextItemId : 0;
      const newItem = { id: id }

      const newItems = data.items && data.items.length > 0
      ? [...data.items, newItem]
      : [newItem];

      return {
        ...data,
        items: newItems,
        nextItemId: id + 1
      }
    }

    case 'updated_item': {
      const newItems = data.items.map(i => {
        if (i.id === action.item.id) {
          return { ...action.item }
        }
        return i;
      });

      return {
        ...data,
        items: newItems
      }
    }

    case 'deleted_item': {
      const newItems = data.items.filter(
        i => i.id !== action.itemID
      );

      return {
        ...data,
        items: newItems
      }
    }

    case 'loaded_data': {
      return action.data
      ? action.data
      : {
          nextItemId: 0,
          items: []
        };
    }
    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  }
}