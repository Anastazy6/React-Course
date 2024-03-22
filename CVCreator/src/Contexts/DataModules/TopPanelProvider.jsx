import { 
  createContext,
  useContext,
  useReducer
} from "react";


const TopPanelContext         = createContext(null);
const TopPanelDispatchContext = createContext(null);


export default function TopPanelProvider ({ children }) {
  const [topPanel, dispatch] = useReducer(
    topPanelReducer, {}
  );

  return (
    <TopPanelContext.Provider value = { topPanel }>
      <TopPanelDispatchContext.Provider value = { dispatch }>
        { children }
      </TopPanelDispatchContext.Provider>
    </TopPanelContext.Provider>
  );
}


export function useTopPanel () {
  return useContext(TopPanelContext);
}

export function useTopPanelDispatch () {
  return useContext(TopPanelDispatchContext);
}


function topPanelReducer (topPanel, action) {
  const name  = action.name;
  const value = action.value;
  

  switch (action.type) {
    case 'updated_top_panel': {
      const newTopPanel = { ...topPanel };
      newTopPanel[name] = value;

      return newTopPanel;
    }
    case 'loaded_data': {
      return { ...action.data }
    }
    default: {
      throw new TypeError(`Invalid action type: ${ action.type }`);
    }
  }
}


