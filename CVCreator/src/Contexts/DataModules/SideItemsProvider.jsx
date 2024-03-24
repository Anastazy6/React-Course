import { 
  createContext,
  useContext,
  useReducer
} from "react";


const SideItemsContext         = createContext(null);
const SideItemsDispatchContext = createContext(null);


export default function SideItemsProvider ({ children }) {
  const [sideItems, dispatch] = useReducer(
    sideItemsReducer, {
      items: [],
      nextItemId: 0
    }
  );

  return (
    <SideItemsContext.Provider value = { sideItems }>
      <SideItemsDispatchContext.Provider value = { dispatch }>
        { children }
      </SideItemsDispatchContext.Provider>
    </SideItemsContext.Provider>
  );
}


export function useSideItems () {
  return useContext(SideItemsContext);
}

export function useSideItemsDispatch () {
  return useContext(SideItemsDispatchContext);
}


function sideItemsReducer (sideItems, action) {
  
  
  switch (action.type) {
    case 'created_side_item': {
      const newNextItemId = sideItems.nextItemId + 1;
      const newItems = [
        ...sideItems.items, 
        {
          title: '',
          level: '',
          id   : sideItems.nextItemId
        }];
        
      return {
        ...sideItems,
        items     : newItems,
        nextItemId: newNextItemId
      }
    }

    case 'updated_items': {
      return sideItems.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            title: action.title,
            level: action.level
          }
        }
        return item;
      });
    }

    case 'loaded_data': {
      return [ ...action.data ];
    }
    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  }
}
